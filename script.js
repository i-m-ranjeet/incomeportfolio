Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: ''
    },
    xAxis: {
        categories: [20,25,30,35,40,45,50,55,60,65]
    },
    yAxis: {
        min: 0,
        title: {
            text: ''
        },
        stackLabels: {
            enabled: false,
            style: {
                
                textOutline: 'none'
            }
        }
    },
    legend: {
        align: 'left',
        x: 0,
        verticalAlign: 'top',
        y: 0    },
    plotOptions: {
        column: {
            stacking: 'normal',
            dataLabels: {
                enabled: false
            }
        }
    },
    series: [{
        name: 'Employer',
        data: [25,50,75,100,125,150,175]
    }, {
        name: 'Employee',
        data: [25,50,75,100,125,150,175]
    }, {
        name: 'Total Intrest',
        data: [25,50,75,100,125,150,175]
    }]
});

var options1 = {
    series: [78],
    chart: {
    height: 130,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Average'],
  };
  var options2 = {
    series: [95],
    chart: {
    height: 130,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Top'],
  };
  var options3 = {
    series: [59],
    chart: {
    height: 130,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      hollow: {
        size: '70%',
      }
    },
  },
  labels: ['Me'],
  };
var chart1 = new ApexCharts(document.querySelector("#chart1"), options1);
var chart2 = new ApexCharts(document.querySelector("#chart2"), options2);
var chart3 = new ApexCharts(document.querySelector("#chart3"), options3);

chart1.render();
chart2.render();
chart3.render();