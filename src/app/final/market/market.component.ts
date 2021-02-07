import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $:any;
import Swal from 'sweetalert2';

declare var $:any;

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent{
  focus;
  focus1;
  constructor(private http: HttpClient) { }
  focus2;
  url;
  test;

    send(type) {
    console.log(type, this.test);
    var url = "https://compi-backend.ecell.in/harrypotter/bid/";
    

    var body = new FormData()
    body.append('price', this.test)
    body.append('item', type)

    var header = new HttpHeaders({
      "Authorization": "Token " + localStorage.getItem('hp_token')
    })
    
    console.log("Token " + localStorage.getItem('hp_token'))
    this.http.post<any>(url, body, {headers: header}).subscribe(
      data => {
        console.log(data)
      }
    )
   }

  ngOnInit(): void { 
    this.checkFullPageBackgroundImage();

    setTimeout(function(){
        // after 1000 ms we add the class animated to the login/register card
        $('.card').removeClass('card-hidden');
    }, 700)

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


};
