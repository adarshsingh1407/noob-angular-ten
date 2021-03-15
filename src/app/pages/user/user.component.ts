import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user: {id: string, name: string};

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = {
      id: this.route.snapshot.params.id,
      name: this.route.snapshot.queryParams.name
    };
    this.route.params.subscribe(params => {
      this.user.id = params.id;
    });
    this.route.queryParams.subscribe(params => {
      this.user.name = params.name;
    })
  }

}
