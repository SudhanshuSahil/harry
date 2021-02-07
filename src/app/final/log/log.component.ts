import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { data } from 'jquery';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  focus;
  focus1;
  focus2;
  team;
  pass;

  constructor(private http: HttpClient, private router: Router ) { }

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
        this.router.navigateByUrl('/main')
      }
    )
  }
}
