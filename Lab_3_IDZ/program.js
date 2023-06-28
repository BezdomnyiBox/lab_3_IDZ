import {buildings} from './data.js';
// получить кнопку с id showTable
element = document.getElementById("showTable");
element.onclick = function () {
    if (this.value === "Показать таблицу") {

        this.value = "Скрыть таблицу";
        // создать таблицу, вывести ее содержимое
        // см. стр. 9-10 Теоретического материала к ЛР
        d3.select("div.table")
            .select("table")
            .selectAll("tr")
            .data(buildings)
            .enter()
            .append('tr');

        d3.select("div.main")
            .select("table")
            .selectAll("tr")
            .data(buildings)
            .html(function (d) {
                return `<td>${d['Название']}</td><td>${d['Тип']}</td><td>${d['Страна']}</td> \
                <td>${d['Город']}</td><td>${d['Год']}</td><td>${d['Высота']}</td><td>${d['Этажность']}</td>`;
            })
            .style("display", ""); 

        // добавить в начало таблицы строку заголовков
        /* d3.select("div.main")
            .select("table")
            .select("tr")
            . */

    } else {
        this.value = "Показать таблицу";
        // удалить строки таблицы
        d3.select("div.table")
            .select("table")
            .selectAll("tr")
            .style("display", "none");
    }
};





