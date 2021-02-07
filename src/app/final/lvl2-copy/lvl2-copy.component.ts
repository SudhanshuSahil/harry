import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lvl2-copy',
  templateUrl: './lvl2-copy.component.html',
  styleUrls: ['./lvl2-copy.component.css']
})
export class Lvl2CopyComponent implements OnInit {
  ans;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  checkFullPageBackgroundImage(){
    var $page = $('.full-page');
    var image_src = $page.data('image');

    if(image_src !== undefined){
        var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
        $page.append(image_container);
    }
  }


  send() {
    var url = "https://compi-backend.ecell.in/harrypotter/test/";
    console.log(this.ans);

    var body = new FormData()
    body.append('level', "lvl2")
    body.append('solution', this.ans)
    
    
        var body = new FormData()
        body.append('level', "lvl2")
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
