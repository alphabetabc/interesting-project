import { createElement, select } from "./../../common/util-dom.js";

const domTree = {
    tableBlue: select("#blue"),
    tableRed: select("#red"),
    btn: select("#btn"),
    filterBtn: select("#filterBtn"),
    preRes: select("#pre-res"),
    blueBall: select("#blue-ball"),
    redBall: select("#red-ball"),
};

// 随机数
const fetchRandom = async (config = {}) => {
    const { num = 6, extent: [min, max] = [1, 33] } = config;
    const option = {
        method: "GET",
    };
    const baseUrl = "https://www.random.org/integers/";
    const parameters = {
        num,
        min,
        max,
        col: 6,
        base: 10, // base must be one of 2, 8, 10 or 16
        format: "plain",
        rnd: "new",
    };
    const res = await fetch(
        `${baseUrl}?${Object.entries(parameters)
            .map((d) => d.join("="))
            .join("&")}`,
        option
    );
    const res_1 = await res.text();
    return res_1
        .split("\n")
        .filter((d) => d)
        .map((row) =>
            row
                .split("\t")
                .filter((d) => d)
                .map((d) => +d)
        );
};

// 创建表格
const createTable = (table, data) => {
    const tableBody = table.querySelector("tbody");
    data.forEach((row) => {
        const tr = createElement("tr");
        row.sort((a, b) => a - b);
        row.forEach((d) => {
            const td = createElement("td");
            td.innerHTML = d;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
};

const bluePool = new Array(33).fill(0).map((d, i) => i + 1);
const redPool = new Array(16).fill(0).map((d, i) => i + 1);

const blueRes = [];
const redRes = [];

const renderTable = () => {
    fetchRandom().then((data) => {
        createTable(domTree.tableBlue, data);
        blueRes.push(data.flat());
    });
    fetchRandom({
        num: 1,
        extent: [1, 16],
    }).then((data) => {
        createTable(domTree.tableRed, data);
        redRes.push(data.flat());
    });
};

domTree.btn.onclick = () => {
    renderTable();
};

domTree.filterBtn.onclick = () => {
    const preValue = domTree.preRes.value.split(",").map((d) => +d);
    blueRes.push(preValue.slice(0, 6));
    redRes.push(preValue.slice(6));

    const blueFilter = Array.from(new Set(blueRes.flat()));
    const redFilter = Array.from(new Set(redRes.flat()));

    const res1 = bluePool.filter((d) => !blueFilter.includes(d));
    const res2 = redPool.filter((d) => !redFilter.includes(d));

    domTree.blueBall.innerHTML = res1.toString();
    domTree.redBall.innerHTML = res2.toString();
};
