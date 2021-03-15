import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit, OnChanges {
  // tslint:disable-next-line: no-input-rename
  @Input() serverIndex: number;
  // tslint:disable-next-line: no-input-rename
  @Input('serverName') name: string;
  // tslint:disable-next-line: no-input-rename
  @Input('serverStatus') status: string;

  @Output() serverSelected = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log('ngOnInit called with', this.name, this.status);
  }

  ngOnChanges(simpleChanges: SimpleChanges): void {
    console.log({simpleChanges});
  }

  handleClickOnServerDetail(selectedServerIndex: number): void {
    this.serverSelected.emit(selectedServerIndex);
  }

}
