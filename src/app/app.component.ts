import { Component } from '@angular/core';
import {PageScrollConfig} from "ngx-page-scroll";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor () {
    // Configure scroll to
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 750;
  }
}
