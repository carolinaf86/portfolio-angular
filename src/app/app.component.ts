import { Component } from '@angular/core';
import {PageScrollConfig} from "ngx-page-scroll";
import {NgsRevealConfig} from "ngx-scrollreveal";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor (ngsRevealConfig: NgsRevealConfig) {
    // Configure scroll-to
    PageScrollConfig.defaultScrollOffset = 50;
    PageScrollConfig.defaultDuration = 750;

    // Configure scroll-reveal
    ngsRevealConfig.reset = true;
    ngsRevealConfig.distance = '10px';
    ngsRevealConfig.easing = 'ease';
  }
}
