import {Component, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {faSpinner} from "@fortawesome/free-solid-svg-icons";

class Contact {
  name: string;
  email: string;
  message?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public status: string = 'ready';
  public submissionError: boolean = false;

  public contact: Contact;

  public faSpinner = faSpinner;

  constructor() { }

  ngOnInit() {

    this.contact = new Contact();

  }

  onSubmit() {
    console.log('form submitted', this.contact);
    this.submissionError = false;

    this.status = 'loading';



  }

}
