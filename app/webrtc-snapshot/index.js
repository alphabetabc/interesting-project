var __classPrivateFieldGet =
    (this && this.__classPrivateFieldGet) ||
    function (receiver, state, kind, f) {
        if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    };
var _SnapShotByRTCController_events, _SnapShotByRTCController_emit, _SnapShotByRTCController_state;

// import * as d3 from "d3";
const events = ["stopShare", "finished"];
class SnapShotByRTCController {
    constructor() {
        _SnapShotByRTCController_events.set(this, d3.dispatch(...events));
        _SnapShotByRTCController_emit.set(this, (type, data) => {
            __classPrivateFieldGet(this, _SnapShotByRTCController_events, "f").call(type, this, { data });
        });
        this.on = (type, listener) => {
            __classPrivateFieldGet(this, _SnapShotByRTCController_events, "f").on(type, listener);
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").removeList.push(() => {
                __classPrivateFieldGet(this, _SnapShotByRTCController_events, "f").on(type, null);
            });
            return this;
        };
        _SnapShotByRTCController_state.set(this, {
            stream: null,
            videoElement: null,
            //TODO: 这里的尺寸是不是不对？
            // mediaWidth: 1920,
            // mediaHeight: 1080,
            mediaWidth: window.innerWidth,
            mediaHeight: window.innerHeight,
            canvasElement: null,
            canvasContext: null,
            enableSnapFlag: false,
            removeList: [],
            scaleX: 1,
            scaleY: 1,
        });
        this.init = () => {
            const root = d3.create("div");
            root.style("position", "fixed")
                .style("left", 0)
                .style("top", 0)
                .style("width", `${__classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaWidth}px`)
                .style("height", `${__classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaHeight}px`)
                .style("overflow", "hidden");
            const canvas = root
                .append("canvas")
                .property("width", __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaWidth)
                .property("height", __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaHeight)
                .style("width", `${__classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaWidth}px`)
                .style("height", `${__classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaHeight}px`);
            const canvasElement = canvas.node();
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").canvasElement = canvasElement;
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").canvasContext = canvasElement.getContext("2d");
            const video = d3.create("video").style("display", "none").attr("autoplay", true).attr("muted", true);
            const videoElement = video.node();
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").videoElement = videoElement;
            const snapDataObject = {
                snapping: false,
                startX: 0,
                startY: 0,
                width: 0,
                height: 0,
            };
            video.on("loadeddata", () => {
                var _a;
                if (
                    ((_a = __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").videoElement) === null || _a === void 0
                        ? void 0
                        : _a.readyState) === HTMLMediaElement.HAVE_ENOUGH_DATA
                ) {
                    document.body.append(root.node());
                    __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").enableSnapFlag = true;
                    /**
                     * 比例计算很重要
                     */
                    __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").scaleX =
                        videoElement.videoWidth / __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaWidth;
                    __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").scaleY =
                        videoElement.videoHeight / __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaHeight;
                }
            });
            const pointerClickRef = {
                delayTimer: null,
            };
            canvas
                .on("mousedown", (e) => {
                    if (!__classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").enableSnapFlag) {
                        return;
                    }
                    /**
                     * 单双击时，会先触发mousedown，再触发dblclick
                     */
                    clearTimeout(pointerClickRef.delayTimer);
                    pointerClickRef.delayTimer = setTimeout(() => {
                        const [x, y] = d3.pointer(e);
                        snapDataObject.startX = x;
                        snapDataObject.startY = y;
                        snapDataObject.snapping = true;
                    }, 500);
                    // this.renderVideo();
                })
                .on("mousemove", (e) => {
                    if (!__classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").enableSnapFlag || !snapDataObject.snapping) {
                        return;
                    }
                    const [x, y] = d3.pointer(e);
                    snapDataObject.width = x - snapDataObject.startX;
                    snapDataObject.height = y - snapDataObject.startY;
                    this.renderRuntimeSnapshot(snapDataObject);
                })
                .on("mouseup", (e) => {
                    if (!__classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").enableSnapFlag || !snapDataObject.snapping) {
                        return;
                    }
                    snapDataObject.snapping = false;
                    this.renderRuntimeSnapshot(snapDataObject);
                })
                .on("dblclick", () => {
                    clearTimeout(pointerClickRef.delayTimer);
                    this.renderSnapshot(snapDataObject);
                    snapDataObject.snapping = false;
                });
            d3.select(document)
                .on("dblclick", () => {
                    clearTimeout(pointerClickRef.delayTimer);
                    this.renderSnapshot(snapDataObject);
                    snapDataObject.snapping = false;
                })
                .on("mouseup", () => {
                    snapDataObject.snapping = false;
                });
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").removeList.push(() => {
                canvas.on("mousedown", null).on("mousemove", null).on("mouseup", null).on("dblclick", null);
                d3.select(document).on("dblclick", null).on("mouseup", null);
                root.remove();
                snapDataObject.snapping = false;
            });
        };
        this.stopShare = () => {
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").enableSnapFlag = false;
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").videoElement.srcObject = null;
            __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").removeList.forEach((fn) => fn());
        };
        this.getDisplayMediaStream = async () => {
            try {
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video: {
                        width: __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaWidth,
                        height: __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaHeight,
                    },
                    audio: false,
                });
                stream.getTracks()[0].addEventListener("ended", () => {
                    __classPrivateFieldGet(this, _SnapShotByRTCController_emit, "f").call(this, "stopShare");
                    this.stopShare();
                });
                const videoElement = __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").videoElement;
                videoElement.srcObject = stream;
                videoElement.autoplay = true;
                __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").stream = stream;
            } catch (error) {}
        };
        this.renderVideo = () => {
            const { videoElement, canvasContext, canvasElement } = __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f");
            if (!videoElement || !canvasContext || !canvasElement) {
                return;
            }
            canvasContext.drawImage(videoElement, 0, 0, canvasElement.width, canvasElement.height);
        };
        this.renderRuntimeSnapshot = (snapData) => {
            if (!snapData.snapping) return;
            const ctx = __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").canvasContext;
            if (snapData.width > 0 && snapData.height > 0) {
                this.renderVideo();
                // mask
                ctx.save();
                ctx.fillStyle = `rgba(255,255,255,0.6)`;
                ctx.fillRect(
                    0,
                    0,
                    __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaWidth,
                    __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").mediaHeight
                );
                ctx.restore();
                const { scaleX, scaleY } = __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f");
                // snap area
                ctx.drawImage(
                    __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").videoElement,
                    snapData.startX * scaleX,
                    snapData.startY * scaleY,
                    snapData.width * scaleX,
                    snapData.height * scaleY,
                    snapData.startX,
                    snapData.startY,
                    snapData.width,
                    snapData.height
                );
            }
        };
        this.renderSnapshot = (snapData) => {
            const video = __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f").videoElement;
            const snapCanvas = document.createElement("canvas");
            snapCanvas.width = snapData.width;
            snapCanvas.height = snapData.height;
            const ctx = snapCanvas.getContext("2d");
            let image = null;
            if (ctx) {
                const { scaleX, scaleY } = __classPrivateFieldGet(this, _SnapShotByRTCController_state, "f");
                // console.log('log------------', { scaleX, scaleY, snapData });
                ctx.drawImage(
                    video,
                    snapData.startX * scaleX,
                    snapData.startY * scaleY,
                    snapData.width * scaleX,
                    snapData.height * scaleY,
                    0,
                    0,
                    snapData.width,
                    snapData.height
                );
                image = snapCanvas.toDataURL("image/png");
            }
            __classPrivateFieldGet(this, _SnapShotByRTCController_emit, "f").call(this, "finished", {
                image,
                width: snapData.width,
                height: snapData.height,
            });
        };
        this.snapShot = async () => {
            this.init();
            await this.getDisplayMediaStream();
        };
    }
    static snapShot() {
        const control = new SnapShotByRTCController();
        control.snapShot();
        return control;
    }
}
(_SnapShotByRTCController_events = new WeakMap()), (_SnapShotByRTCController_emit = new WeakMap()), (_SnapShotByRTCController_state = new WeakMap());
const root = d3
    .select("#root")
    .style("outline", "auto")
    .html('<div style="color:#fff;font-size:30px;" >暂无截图结果<button id="btn" style="font-size:30px">截图</button></div>');
root.select("#btn").on("click", () => {
    SnapShotByRTCController.snapShot().on("finished", (e) => {
        const root = d3.select("#root");
        root.selectAll("*").remove();
        root.style("width", `${e.data.width}px`).style("height", `${e.data.height}px`);
        root.append("img").attr("src", e.data.image);
    });
});
