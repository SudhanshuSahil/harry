import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import Swal from 'sweetalert2';
import { HttpClient, HttpHeaders } from '@angular/common/http';
declare var $:any;

@Component({
  selector: 'app-lvl2',
  templateUrl: './lvl2.component.html',
  styleUrls: ['./lvl2.component.css']
})
export class Lvl2Component implements OnInit {
  ans;
  team;
  value;
  focus;
  focus1;
  focus2;
    test : Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;


  constructor(private element : ElementRef, private http: HttpClient) { 
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }
  checkFullPageBackgroundImage(){
    var $page = $('.full-page');
    var image_src = $page.data('image');

    if(image_src !== undefined){
        var image_container = '<div class="full-page-background" style="background-image: url(' + image_src + ') "/>'
        $page.append(image_container);
    }
};

  ngOnInit(){
    this.checkFullPageBackgroundImage();
    var body = document.getElementsByTagName('body')[0];
    body.classList.add('login-page');
    var navbar : HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];

    this.ans = "df"

  }
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
  }

   send() {
    var url = "https://compi-backend.ecell.in/harrypotter/test/";
    console.log(this.ans);

    var body = new FormData()
    body.append('level', "lvl2")
    body.append('solution', this.ans)

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
  