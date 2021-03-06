import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit,ElementRef } from '@angular/core';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-lvl4p2',
  templateUrl: './lvl4p2.component.html',
  styleUrls: ['./lvl4p2.component.css']
})
export class Lvl4p2Component implements OnInit {
 
  focus;
  focus1;
  focus2;
  team;
    test : Date = new Date();
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;
  constructor(private element : ElementRef, private http:HttpClient) { 
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
  ngOnDestroy(){
      var body = document.getElementsByTagName('body')[0];
      body.classList.remove('login-page');
  }

  
  sidebarToggle(){
      var toggleButton = this.toggleButton;
      var body = document.getElementsByTagName('body')[0];
      var sidebar = document.getElementsByClassName('navbar-collapse')[0];
      if(this.sidebarVisible == false){
          setTimeout(function(){
              toggleButton.classList.add('toggled');
          },500);
          body.classList.add('nav-open');
          this.sidebarVisible = true;
      } else {
          this.toggleButton.classList.remove('toggled');
          this.sidebarVisible = false;
          body.classList.remove('nav-open');
      }
   }

 

   send(button) {
    var url = "https://compi-backend.ecell.in/harrypotter/test/";
    console.log(button);

    var body = new FormData()
    body.append('level', "lvl4p2")
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


}
