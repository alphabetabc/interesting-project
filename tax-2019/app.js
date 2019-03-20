const select = selector => document.querySelector(selector);
const form = select("#form");
const output = select("#output");

const standard = select("#standard");
const salary = select("#salary");
const free01 = select("#free01");
const free02 = select("#free02");

const monthNumbers = new Array(12).fill(0).map((d, i) => i + 1);
const headData = [
  "月份", "工资", "五险一金", "专项扣除", "累计额度", "预扣率", "速算扣除数",
  "参与扣税的工资", "税费", "到手工资", "税费占比"
];

form.onsubmit = e => {
  e.preventDefault();
  createTable();
};

createThead();
createTable();

function createThead() {
  const tr = output.querySelector("thead>tr");
  headData.forEach(d => {
    const td = document.createElement("td");
    td.innerHTML = d;
    tr.appendChild(td);
  });
}

function createTable() {
  const salaryValue = +salary.value;
  const free01Value = +free01.value;
  const free02Value = +free02.value;
  const standardValue = +standard.value;
  const sumValues = [0];
  const tbody = output.querySelector("tbody");
  tbody.innerHTML = "";
  monthNumbers.forEach(month => {
    const taxBase = (salaryValue - standardValue - free01Value - free02Value) * month;
    const sumTax = sumValues.reduce((t, n) => t + n);
    const [p1, p2] = calcParams(taxBase);
    const tax = taxBase * p1 - p2 - sumTax;
    sumValues.push(tax);

    const tr = document.createElement("tr");

    const rowData = [
      month, // 月份
      salaryValue, // 工资
      free01Value, // 五险一金
      free02Value, // 专项扣除
      sumTax, // 累计额度
      p1, // 预扣率
      p2, // 速算扣除数
      taxBase, // 参与扣税的工资
      tax, // 税费
      salaryValue - tax, // 到手工资
      (tax / salaryValue * 100).toFixed(2) + "%",
    ];

    rowData.forEach((d, i) => {
      const td = document.createElement("td");
      td.innerHTML = d;
      td.setAttribute("title", `${headData[i]}:${d}`)
      tr.appendChild(td);
    })

    tbody.appendChild(tr);

  });
}

function calcParams(v) {
  switch (true) {
    case v <= 36000:
      return [0.03, 0];
    case v > 36000 && v <= 144000:
      return [0.1, 2520];
    case v > 144000 && v <= 300000:
      return [0.2, 16920];
    case v > 300000 && v <= 420000:
      return [0.25, 31920];
    case v > 420000 && v <= 660000:
      return [0.3, 52920];
    case v > 660000 && v <= 960000:
      return [0.35, 85920];
    default:
      return [0.45, 181920];
  }
}