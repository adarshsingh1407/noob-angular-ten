import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input('serverDetail') server: {name: string, status: string};

  constructor() { }

  ngOnInit(): void {
  }

}
