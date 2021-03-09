import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input('serverName') name: string;
  // tslint:disable-next-line: no-input-rename
  @Input('serverStatus') status: string;

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called with', this.name, this.status);
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log({simpleChanges});
  }

}
