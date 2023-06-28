alert("Здравствуй!");

function f(x) {
    return x ** 3 - 6 * x ** 2 + x + 5;
}
a = -2;
b = 6;
n = 30;
h = (b - a) / (n - 1);
let arrGraph = [];
for (let i = 0; i < n; i++) {
    let x = a + i * h;
    arrGraph.push({ 'x': x, 'f': f(x) });
}

let width = 500;
let height = 500;
let marginX = 50;
let marginY = 40;


let svg = d3.select("body")
    .append("svg")
    .attr("height", height)
    .attr("width", width)
    .style("border", "solid thin grey");

let minMaxF = d3.extent(arrGraph.map(d => d.f));
let min = minMaxF[0];
let max = minMaxF[1];

let scaleX = d3.scaleLinear()
    .domain([a, b])
    .range([0, width - 2 * marginX]);
let scaleY = d3.scaleLinear()
    .domain([min, max])
    .range([height - 2 * marginY, 0]);

// создание осей
let axisX = d3.axisBottom(scaleX); // горизонтальная
let axisY = d3.axisLeft(scaleY);   // вертикальная

// отрисовка осей в SVG-элементе
svg.append("g")
    .attr("transform", `translate(${marginX}, ${height - marginY})`)
    .call(axisX);
svg.append("g")
    .attr("transform", `translate(${marginX}, ${marginY})`)
    .call(axisY);

svg.append("g")
    .attr("transform", `translate(${marginX}, ${scaleY(0) + marginY})`)
    .call(axisX);
svg.append("g")
    .attr("transform", `translate(${marginX + scaleX(0)}, ${marginY})`)
    .call(axisY);

    


