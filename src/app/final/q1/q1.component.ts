import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
  ans;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  send() {
    var url = "https://compi-backend.ecell.in/harrypotter/test/";
    console.log(this.ans);

    var body = new FormData()
    body.append('level', "quiz1")
    body.append('solution', this.ans)

    var header = new HttpHeaders({
      "Authorization": "Token " + localStorage.getItem('hp_token')
    })

    this.http.post<any>(url, body, {headers: header}).subscribe(
      data => {
        console.log(data)
      }
    )

}



}
