import { HttpClient } from '@angular/common/http';
import { AfterContentInit, AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { PostService } from './../../services/post.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {
  genders = ['male', 'female'];
  createUserForm: FormGroup;

  constructor(private postService: PostService) {
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
    console.log(this.createUserForm);
    const {
      value: {
        email,password, gender, newsletter
      }
    } = this.createUserForm;
    const post = {
      title: email,
      body: `password: ${password}, gender: ${gender}, newsletter: ${newsletter}`,
      userId: email,
    };
    this.postService.createPost(post).subscribe(res => console.log(res));
  }

}
