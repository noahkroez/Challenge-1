//STANDARD BAR CHART START
google.charts.load('current', {
    packages: ['corechart', 'bar']
});
google.charts.setOnLoadCallback(drawBasic);

function drawBasic() {

    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Time of Day');
    data.addColumn('number', 'Fuel in hundred gallons');

    data.addRows([
        [{
            v: '22',
            f: '18 s'
        }, 10],
        [{
            v: '22',
            f: '36 s'
        }, 9],
        [{
            v: '22',
            f: '54 s'
        }, 8],
        [{
            v: '22',
            f: '72 s'
        }, 7],
        [{
            v: '22',
            f: '90 s'
        }, 6],
        [{
            v: '22',
            f: '108 s'
        }, 5],
        [{
            v: '22',
            f: '126 s'
        }, 4],
        [{
            v: '22',
            f: '144 s'
        }, 3],
        [{
            v: '22',
            f: '162 s'
        }, 2],
        [{
            v: '22',
            f: '180 s'
        }, 1],
      ]);

    var options = {
        backgroundColor: '#f4f4f4',
        title: 'Fuel levels from launch to space',
        hAxis: {
            title: 'Time in seconds',
            format: 'h:mm a',
            viewWindow: {
                min: [7, 30, 0],
                max: [17, 30, 0]
            }
        },
        vAxis: {
            title: 'Fuel in hundred gallons'
        }
    };
    //STANDARD BAR CHART EIND

    //DONUT CHART START

    var chart = new google.visualization.ColumnChart(
        document.getElementById('chart_div'));

    chart.draw(data, options);
}
google.charts.load("current", {
    packages: ["corechart"]
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([['Task', 'Hours per Day'], ['Peanut butter', 20], ['Chicken', 25], ['Bread', 30], ['Rice', 32]]);
    var options = {
        backgroundColor: '#f4f4f4',
        title: 'Food supplies left',
        pieHole: 0.3,
        fontSize: 10,
    };
    var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
    chart.draw(data, options);
}

//DONUT CHART EIND
//START LINE CHART
google.charts.load('current', {
    packages: ['corechart', 'line']
});
google.charts.setOnLoadCallback(drawBackgroundColor);

function drawBackgroundColor() {
    var data = new google.visualization.DataTable();
    data.addColumn('number', 'TIME');
    data.addColumn('number', 'Distance in KM');

    data.addRows([
        [0, 0], [1, 10], [2, 23], [3, 17], [4, 18], [5, 9],
        [6, 11], [7, 27], [8, 33], [9, 40], [10, 32], [11, 35],
        [12, 30], [13, 40], [14, 42], [15, 47], [16, 44], [17, 48],
        [18, 52], [19, 54], [20, 42], [21, 55], [22, 56], [23, 57],
        [24, 60], [25, 50], [26, 52], [27, 51], [28, 49], [29, 53],
        [30, 55], [31, 60], [32, 61], [33, 59], [34, 62], [35, 65],
        [36, 62], [37, 58], [38, 55], [39, 61], [40, 64], [41, 65],
        [42, 63], [43, 66], [44, 67], [45, 69], [46, 69], [47, 70],
        [48, 72], [49, 68], [50, 66], [51, 65], [52, 67], [53, 70],
        [54, 71], [55, 72], [56, 73], [57, 75], [58, 70], [59, 68],
        [60, 64], [61, 60], [62, 65], [63, 67], [64, 68], [65, 69],
        [66, 70], [67, 72], [68, 75], [69, 80]
      ]);

    var options = {
        hAxis: {
            title: 'Time in hours'
        },
        vAxis: {
            title: 'Distance in KM'
        },
        backgroundColor: '#f4f4f4',
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}
//EIND LINE CHART

window.onresize = function () {
    location = location;
}
