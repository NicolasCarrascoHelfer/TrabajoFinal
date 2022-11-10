
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Task', 'Percentage'],
        ['Universitarios Desempleados',     112000],
        ['Recien Egresados Desempleados',      200000],
        ['Recien Egresados Empleados',      51000],
        ['Universitarios Empleados',      40000],
    ]);

    var options = {
        title: 'Condicion de empleo en Universitarios y Recien Egresados',
        backgroundColor:"transparent",
        is3D: true,
        fontFamily: "Acme",


    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}
