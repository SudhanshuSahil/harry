import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-lvl7p1',
  templateUrl: './lvl7p1.component.html',
  styleUrls: ['./lvl7p1.component.css']
})
export class Lvl7p1Component implements OnInit {
  test;
  focus;
  focus1;
  focus2;
    private toggleButton;
    private sidebarVisible: boolean;
    private nativeElement: Node;


  constructor(private element : ElementRef) { 
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


   send() {
     console.log(this.test)
   }
  }
  