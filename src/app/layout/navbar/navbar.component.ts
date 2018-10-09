import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public url: string;

  constructor(private router: Router) {

  }

  ngOnInit() {

    // Get current url (cannot use ActivatedRoute.url as outside of RouterOutlet)
    this.router.events
      .subscribe((event: any) => {
        if (event instanceof NavigationEnd) {
          this.url = event.url;
        }
      });

  }

}
