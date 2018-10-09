import { Component, OnInit } from '@angular/core';
import {faAngular, faJsSquare} from "@fortawesome/free-brands-svg-icons";
import {faCode, faHeart} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  public faAngular = faAngular;
  public faJsSquare = faJsSquare;
  public faCode = faCode;
  public faHeart = faHeart;

  constructor() { }

  ngOnInit() {
  }

}
