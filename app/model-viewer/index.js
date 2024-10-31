import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { DRACOLoader } from "three/addons/loaders/DRACOLoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";

import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";

// const dracoLoader = new DRACOLoader();
// dracoLoader.setDecoderPath("../static/three-vendors/draco/gltf/");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);

// const ambientLight = new THREE.AmbientLight(0xffffff, 100);
// scene.add(ambientLight);

const pmremGenerator = new THREE.PMREMGenerator(renderer);
scene.background = new THREE.Color("#666");
scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

const loader = new GLTFLoader();

// gltfpack https://github.com/zeux/meshoptimizer/blob/master/gltf/README.md
loader.setMeshoptDecoder(MeshoptDecoder);
// loader.setDRACOLoader(dracoLoader);

const modelRawInfo = (gltfScene) => {
    const box = new THREE.Box3().setFromObject(gltfScene);
    const size = box.getSize(new THREE.Vector3());
    const center = box.getCenter(new THREE.Vector3());

    let objects = 0,
        vertices = 0,
        triangles = 0;

    const scaleObjects = [];

    gltfScene.__depth = 0;
    // console.log(gltfScene);

    for (let i = 0, l = gltfScene.children.length; i < l; i++) {
        const object = gltfScene.children[i];
        // object.__depth = object.parent.__depth + 1;

        object.traverseVisible((objectItem) => {
            objects++;
            objectItem.__depth = objectItem.parent.__depth + 1;

            if (objectItem.isMesh || objectItem.isPoints) {
                const geometry = objectItem.geometry;

                vertices += geometry.attributes.position.count;

                if (objectItem.isMesh) {
                    if (geometry.index !== null) {
                        triangles += geometry.index.count / 3;
                    } else {
                        triangles += geometry.attributes.position.count / 3;
                    }
                }
            }

            if (objectItem.scale.x !== 1 || objectItem.scale.y !== 1 || objectItem.scale.z !== 1) {
                scaleObjects.push({
                    name: objectItem.name,
                    scale: objectItem.scale.clone().toArray(),
                    type: objectItem.type,
                    depth: objectItem.__depth,
                    uuid: objectItem.uuid,
                });
            }
        });
    }

    return {
        objects,
        vertices,
        triangles,
        size,
        center,
        scaleObjects,
    };
};

const ctx = {
    scene,
    camera,
    renderer,
    controls,
    loader,

    state: {
        removePreModel: () => {},
    },
};

const fitCameraToModel = (scene) => {
    const boxHelper = new THREE.BoxHelper(scene, 0x2bb8aa);
    const { center, radius } = boxHelper.geometry.boundingSphere || {};

    const box = new THREE.Box3();
    box.expandByObject(scene);
    box.getCenter(center);

    ctx.camera.position.copy(center.clone().add(new THREE.Vector3(0, 0, radius * 3)));
    ctx.camera.lookAt(center);

    ctx.controls.target.copy(center);
    ctx.controls.update();
};

const dom = {
    root: document.getElementById("root"),
    inputFile: document.getElementById("inputFile"),
    modelInfo: document.getElementById("model-info"),
};

const root = dom.root;
renderer.setSize(root.clientWidth, root.clientHeight);
root.appendChild(renderer.domElement);

dom.inputFile.onchange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (e) => {
        const result = reader.result;

        ctx.loader.parse(result, "", (gltf) => {
            // 计算模型的长宽高
            // 计算模型的中心点
            // 计算模型的定点数
            // 写入dom.modelInfo中

            const rawInfo = modelRawInfo(gltf.scene);

            const { size, center } = rawInfo;

            dom.modelInfo.innerHTML = `
                        <div>模型名称: ${gltf.scene.name || "--"}</div>    
                        <div>-----------------------------</div>
                        <div>模型中心点: ${center.x.toFixed(2)}, ${center.y.toFixed(2)}, ${center.z.toFixed(2)}</div>
                        <div>-----------------------------</div>
                        <div>模型尺寸x: ${size.x}</div>
                        <div>模型尺寸y: ${size.y}</div>
                        <div>模型尺寸z: ${size.z}</div>
                        <div>-----------------------------</div>
                        <div>模型顶点数: ${rawInfo.vertices}</div>
                        <div>模型三角面数: ${rawInfo.triangles}</div>
                        <div>模型对象数: ${rawInfo.objects}</div>
                        <div>-----------------------------</div>
                        <div>
                            放缩对象列表:
                            <div class="json-list">${JSON.stringify(rawInfo.scaleObjects, null, 4)}</div>
                        </div>
                    `;

            fitCameraToModel(gltf.scene);

            ctx.state.removePreModel();
            ctx.scene.add(gltf.scene);
            ctx.state.removePreModel = () => {
                ctx.scene.remove(gltf.scene);
            };
        });
    };
    reader.readAsArrayBuffer(file);
};

const render = () => {
    ctx.renderer.render(ctx.scene, ctx.camera);
    requestAnimationFrame(render);
};

requestAnimationFrame(render);
