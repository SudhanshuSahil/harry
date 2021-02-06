import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { data } from 'jquery';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  team;
  pass;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.team, this.pass);
    var body = new FormData()
    body.append('username', this.team)
    body.append('password', this.pass)

    this.http.post<any>("https://compi-backend.ecell.in/harrypotter/api-auth/", body).subscribe(
      data => {
        console.log(data)
        localStorage.setItem('hp_token', data['token'])
      }
    )
  }

}
