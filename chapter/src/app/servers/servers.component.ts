import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-servers', -- As a component
  // selector: '[app-servers]' -- As a CSS component
  // selector: '.app-servers', -- As a CSS class
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
