import { Injectable } from '@angular/core';
import {PROJECT_CONTENT, ProjectContent} from '../../content';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  getContent(): ProjectContent[] {
    return PROJECT_CONTENT;
  }

  getContentById(id: number): ProjectContent {

    const [content] = PROJECT_CONTENT.filter(item => item.id === id);

    return content;

  }

}
