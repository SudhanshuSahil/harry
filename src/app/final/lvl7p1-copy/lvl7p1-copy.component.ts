import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lvl7p1-copy',
  templateUrl: './lvl7p1-copy.component.html',
  styleUrls: ['./lvl7p1-copy.component.css']
})
export class Lvl7p1CopyComponent implements OnInit {

  test;
  team;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  send() {
    var url = "https://compi-backend.ecell.in/harrypotter/test/";
    console.log(this.test)
    var body = new FormData()
    body.append('level', "lvl2")
    body.append('solution', this.test)

    var header = new HttpHeaders({
      "Authorization": "Token " + localStorage.getItem('hp_token')
    })

    this.http.post<any>(url, body, {headers: header}).subscribe(
      data => {
        console.log(data)
        this.team = data['team']
        localStorage.setItem('team_data', JSON.stringify(this.team))
      }
    )
  }

}
