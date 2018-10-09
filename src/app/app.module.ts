import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { AboutComponent } from './home/about/about.component';
import { SkillsComponent } from './home/skills/skills.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ProjectsComponent } from './home/projects/projects.component';
import { NgxPageScrollModule } from 'ngx-page-scroll';
import { NgsRevealModule } from 'ngx-scrollreveal';
import { ProjectDetailComponent } from './project-detail/project-detail.component';
import { CvComponent } from './cv/cv.component';
import { AlertModule } from 'ngx-bootstrap';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ProjectDetailComponent,
    CvComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgxPageScrollModule,
    NgsRevealModule,
    AlertModule.forRoot(),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
