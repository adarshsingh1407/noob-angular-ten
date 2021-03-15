import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ServerService } from '../services/server.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  // tslint:disable-next-line: no-input-rename
  @Input() serverIndex: number;
  server: {name: string, status: string};

  constructor(private serverService: ServerService) { }

  ngOnInit(): void {
    this.server = this.serverService.servers[this.serverIndex];
  }

  handleClickOnServerDetail(selectedServerIndex: number): void {
    this.serverService.serverSelected.emit(selectedServerIndex);
  }

}
