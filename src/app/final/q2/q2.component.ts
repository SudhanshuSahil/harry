import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {

  ans
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }


  send() {
     var url = "https://compi-backend.ecell.in/harrypotter/test/";
     console.log(this.ans);
 
     var body = new FormData()
     body.append('level', "quiz2")
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
