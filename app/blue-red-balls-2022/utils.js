import * as d3 from "https://cdn.skypack.dev/d3@latest";

const localRandom = (config) => {
    const { count = 6, extent: [min, max] = [1, 33], base = [] } = config;
    const uniqueRandom = new Set(base);

    if (uniqueRandom.size >= count) {
        return base.slice(0, count);
    }

    const gen = d3.randomInt(min, max);
    while (uniqueRandom.size < count) {
        uniqueRandom.add(gen());
    }

    return [...uniqueRandom].sort((a, b) => a - b);
};

const api = async (url, option) => {
    const cancelToken = new AbortController();
    const response = await fetch(url, { signal: cancelToken.signal, ...option });
    setTimeout(() => {
        cancelToken.abort("timeout");
    }, 20 * 1000);
    return response;
};

/**
 * 随机数
 * @param {{count:number; extent:[number, number]}} config
 * @returns
 */
export const fetchRandom = async (config = {}) => {
    const { count = 6, extent: [min, max] = [1, 33] } = config;
    const option = {
        method: "GET",
    };
    const baseUrl = "https://www.random.org/integers/";
    const parameters = {
        num: count,
        min,
        max,
        col: 6,
        base: 10, // base must be one of 2, 8, 10 or 16
        format: "plain",
        rnd: "new",
    };

    const queryParams = Object.entries(parameters)
        .map((d) => d.join("="))
        .join("&");

    try {
        const res = await api(`${baseUrl}?${queryParams}`, option);
        const text = await res.text();
        const num = text
            .split(/\t|\n/)
            .filter(Boolean)
            .map((row) => {
                return row
                    .split(/\t/)
                    .filter(Boolean)
                    .map((d) => Number(d.trim()));
            });

        const uniqueNum = [...new Set(num)];
        return localRandom({ ...config, base: uniqueNum });
    } catch (e) {
        return Promise.resolve(localRandom(config));
    }
};
