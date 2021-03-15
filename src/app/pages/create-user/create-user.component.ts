import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  @ViewChild('createUserForm') createUserForm: NgForm;
  defaultNewsletter = true;
  genders = ['male', 'female'];
  defaultGender = this.genders[0];
  defaultEmail = 'adarsh@gmail.com';
  defaultPassword = 'adarsh@123';

  constructor() {
  }

  ngOnInit(): void { }

  handleFormSubmit(): void {
    console.log(this.createUserForm);
    console.log(this.createUserForm.value);
    const {value: {email, password, newsletter}} = this.createUserForm;
    console.log({email, password, newsletter});
  }

}
