import { Component, ElementRef, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import Swal from 'sweetalert2';
declare var $:any;

@Component({
  selector: 'app-quiz1',
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css']
})
export class Quiz1Component implements OnInit {
  showSwal(type) {
    if (type == 'input-field') {
       Swal.fire({
           title: 'Input Bidding Value',
           html: '<div class="form-group">' +
               '<input id="input-field" type="text" class="form-control" />' +
               '</div>',
           showCancelButton: true,
           customClass:{
             confirmButton: 'btn btn-success',
             cancelButton: 'btn btn-danger',
           },
           buttonsStyling: false
       }).then(function(result) {
           Swal.fire({
               icon: 'success',
               html: 'You entered: <strong>' +
                   $('#input-field').val() +
                   '</strong>',
               customClass:{
                 confirmButton: 'btn btn-success',
               },
               buttonsStyling: false
           })
       })
     }
     else if (type == 'warning-message-and-cancel') {
      Swal.fire({
          title: 'Are you sure?',
          text: 'You will not be able to recover this item!',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonText: 'Yes, sell it!',
          cancelButtonText: 'No, keep it',
          customClass:{
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: false
      }).then((result) => {
        if (result.value) {
          Swal.fire({
              title: 'Deleted!',
              text: 'Your item has been sold.',
              icon: 'success',
              customClass:{
                confirmButton: "btn btn-success",
              },
              buttonsStyling: false
          })
        } else {
          Swal.fire({
              title: 'Cancelled',
              text: 'Your item is safe :)',
              icon: 'error',
              customClass:{
                confirmButton: "btn btn-info",
              },
              buttonsStyling: false
          })
        }
      })
   }
  }
  focus;
  focus1;
  focus2;
    test : Date = new Date();
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
  }
  