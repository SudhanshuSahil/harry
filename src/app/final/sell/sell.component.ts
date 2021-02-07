import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ElementRef } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  team;
  focus;
  focus1;
  focus2;
  test : Date = new Date();

  constructor(private element : ElementRef,private http: HttpClient) {
   }

  ngOnInit(): void { 
    this.checkFullPageBackgroundImage();

    setTimeout(function(){
        // after 1000 ms we add the class animated to the login/register card
        $('.card').removeClass('card-hidden');
    }, 700)

    var url = "https://compi-backend.ecell.in/harrypotter/team";
    var header = new HttpHeaders({
      "Authorization": "Token " + localStorage.getItem('hp_token')
    })

    this.http.get<any>(url, {headers: header}).subscribe(
      data => {
        console.log(data)
        this.team = data['team']
        localStorage.setItem('team_data', JSON.stringify(this.team))
      }
    )

  }

  checkFullPageBackgroundImage(){
    var $page = $('.full-page');
    var image_src = $page.data('image');
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('register-page');
    if(image_src !== undefined){
        var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
        $page.append(image_container);
    }
};
send(button) {
  var url = "https://compi-backend.ecell.in/harrypotter/sell/";
  console.log(button);

  var body = new FormData()
  body.append('decision', button)

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



};
