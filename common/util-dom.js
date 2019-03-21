const select = (selector) => {
    if (selector.indexOf("#")) {
        return document.querySelector(selector);
    } else if (selector.indexOf(".")) {
        return document.querySelectorAll(selector)[0];
    }
};

const createElement = (tagname) => document.createElement(tagname);

export { select, createElement };
