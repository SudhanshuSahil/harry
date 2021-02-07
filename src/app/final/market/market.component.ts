import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  focus2;

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
   }
  constructor(private http: HttpClient) { }

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
