import { select } from "./../../common/util-dom.js";

const dragEl = select("#dragEl");

const width = dragEl.offsetWidth;
const height = dragEl.offsetHeight;

// 边界
const maxLeft = 1000 - width;
const maxTop = 800 - height;

dragEl.onmousedown = function (ev) {
    ev.stopPropagation();
    const thisEl = this;

    // 元素当前的位置
    const offsetX = thisEl.offsetLeft;
    const offsetY = thisEl.offsetTop;

    // 点击的位置
    const currentX = ev.clientX;
    const currentY = ev.clientY;

    // 计算位置
    const moveFn = function (ev) {
        // 移动的位置
        const moveX = ev.clientX;
        const moveY = ev.clientY;

        // 位置 = (移动位置 - 点击的位置) + 元素的初始位置
        // 移动位置 - 点击的位置 ===> 这个计算的鼠标移动的位置差--变化量
        let posX = moveX - currentX + offsetX;
        let posY = moveY - currentY + offsetY;

        // 边界位置判断
        if (posX >= maxLeft) posX = maxLeft;
        if (posX <= 0) posX = 0;
        if (posY >= maxTop) posY = maxTop;
        if (posY <= 0) posY = 0;

        // 对元素的位置进行赋值
        thisEl.style.left = posX + "px";
        thisEl.style.top = posY + "px";
    };

    // document-mouseup
    // 移出边界后取消事件监听--->在任何时候，鼠标抬起之后就应该取消事件
    const docMouseupHandle = function () {
        document.removeEventListener("mousemove", moveFn);
        document.removeEventListener("mouseup", docMouseupHandle);
    };

    // move
    document.addEventListener("mousemove", moveFn, false);

    // 停止监听move
    document.addEventListener("mouseup", docMouseupHandle, false);
};
