import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  lvls;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<any>("https://compi-backend.ecell.in/harrypotter/lvlctrl/").subscribe(
      data => {
        this.lvls = data
        console.log(data)
      }
    )
  }

}
