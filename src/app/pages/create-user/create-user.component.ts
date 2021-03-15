import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  genders = ['male', 'female'];
  createUserForm: FormGroup;

  constructor() {
  }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      'email': new FormControl('adarsh@gmail.com', [Validators.required, Validators.email]),
      'password': new FormControl('adarsh@123'),
      'gender': new FormControl(this.genders[0]),
      'newsletter': new FormControl(true)
    })
  }

  handleFormSubmit(): void {
    console.log(this.createUserForm)
  }

}
