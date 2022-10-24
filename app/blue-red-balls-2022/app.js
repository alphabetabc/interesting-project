import * as d3 from "https://cdn.skypack.dev/d3@latest";
import { AbstractApp } from "../../common/app.js";
import { fetchRandom, UniqueSet } from "./utils.js";

const COLUMNS = [
    {
        type: "blue",
        text: "蓝球1",
    },
    {
        type: "blue",
        text: "蓝球2",
    },
    {
        type: "blue",
        text: "蓝球3",
    },
    {
        type: "blue",
        text: "蓝球4",
    },
    {
        type: "blue",
        text: "蓝球5",
    },
    {
        type: "blue",
        text: "蓝球6",
    },
    {
        type: "red",
        text: "红球",
    },
];

class BlueRedBalls extends AbstractApp {
    root = null;

    state = {
        balls: {},
    };

    table = null;
    tableBody = null;

    blueBalls = new UniqueSet();
    redBalls = new UniqueSet();

    initAction = () => {
        this.root
            .append("button")
            .text("GENERATOR BALLS")
            .style("line-height", "30px")
            .style("padding", "10px")
            .on("click", () => {
                this.renderBalls();
            });
    };

    initTable = () => {
        const table = this.root.append("table").attr("class", "blue-red-balls-table");
        table
            .append("thead")
            .append("tr")
            .selectAll("th")
            .data(COLUMNS)
            .enter()
            .append("th")
            .attr("class", "col")
            .text((d) => d.text);

        this.table = table;
        this.tableBody = table.append("tbody");
    };

    renderBalls = async () => {
        const blueBalls = await fetchRandom({ count: 6, extent: [1, 33] });
        const redBalls = await fetchRandom({ count: 1, extent: [1, 16] });

        this.blueBalls.push(blueBalls);
        this.redBalls.push(redBalls);

        this.setState({
            balls: {
                blue: blueBalls,
                red: redBalls[0],
            },
        });
    };

    init() {
        this.root = d3.select(this.domElement);

        // this.initPicker();
        this.initAction();
        this.initTable();
        this.renderBalls();
    }

    render() {
        const { balls = {} } = this.state;
        const { blue = [], red = null } = balls;
        const list = [...blue, red].filter((d) => d);
        if (Array.isArray(list) && list.length > 0) {
            this.tableBody
                .append("tr")
                .selectAll("td")
                .data(COLUMNS)
                .enter()
                .append("td")
                .append("span")
                .attr("class", (d) => (d.type === "blue" ? "ball_blue" : "ball_red"))
                .text(0)
                .transition()
                .duration(1000)
                .ease(d3.easeLinear)
                .textTween((d, i) => d3.interpolateRound(0, list[i]));
        }
    }
}

const app = new BlueRedBalls();
app.renderTo(document.getElementById("root"));
