import { Component, OnInit } from '@angular/core';
declare const google:any;
declare const drawChart:any;
@Component({
  selector: 'app-graphpiechart',
  templateUrl: './graphpiechart.component.html',
  styleUrls: ['./graphpiechart.component.css']
})
export class GraphpiechartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);
  }
  drawChart() {

    var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Work',     11],
      ['Eat',      2],
      ['Commute',  2],
      ['Watch TV', 2],
      ['Sleep',    7]
    ]);

    var options = {
      title: 'My Daily Activities'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
  }

}
