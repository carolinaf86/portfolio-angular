import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ContentService} from "../services/content.service";
import {ProjectContent} from "../../content";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-project-detail ',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  private id: number;
  public content: ProjectContent;

  public nextUrl: string;
  public prevUrl: string;
  public headerClass: string;

  public faChevronLeft = faChevronLeft;
  public faChevronRight = faChevronRight;

  constructor(private route: ActivatedRoute, private contentService: ContentService) { }

  ngOnInit() {

    this.route.paramMap
      .subscribe((paramMap: ParamMap) => {
        this.id = +paramMap.get('id');

        this.content = this.contentService.getContentById(this.id);

        this.prevUrl = '/projects/' + (this.id > 1 ? this.id - 1 : 6);
        this.nextUrl = '/projects/' + (this.id < 6 ? this.id + 1 : 1);

        this.headerClass = this.id === 6 ? 'default' : `portfolio-${this.id}`;

    });

  }

}
