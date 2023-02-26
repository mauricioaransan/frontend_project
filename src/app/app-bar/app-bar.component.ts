import { Component, OnInit } from '@angular/core';
import { faBars, faToggleOff } from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-app-bar',
  templateUrl: './app-bar.component.html',
  styleUrls: ['./app-bar.component.css']
})
export class AppBarComponent implements OnInit {

  /**
   * Icons
   */
  bars = faBars ;
  toggleOff = faToggleOff;

  constructor() { }

  ngOnInit(): void {
  }

}
