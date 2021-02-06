import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
declare var $:any;


@Component({
  selector: 'app-reg',
  templateUrl: './reg.component.html',
  styleUrls: ['./reg.component.css']
})
export class RegComponent implements OnInit {
  focus;
  focus1;
  focus2;
  team;
  mem1;
  mem2;
  mem3;
  password;

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

submit(){
    console.log(this.team, this.mem1, this.mem2, this.mem3, this.password)
    var url = "https://compi-backend.ecell.in/harrypotter/reg/";
    var body = new FormData();
    body.append('username', this.team)
    body.append('password', this.password)
    body.append('mem1', this.mem1)
    body.append('mem2', this.mem2)
    body.append('mem3', this.mem3)

    this.http.post<any>(url, body).subscribe(
      data => {
        console.log(data)
        localStorage.setItem('hp_token', data['token'])
      }
    )

};


}
