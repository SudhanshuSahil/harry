import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {
  team;
  pass;

  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.team, this.pass)
  }

}
