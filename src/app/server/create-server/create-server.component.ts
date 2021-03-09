import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit{
  // tslint:disable-next-line: no-output-rename
  @Output('svrAdded') serverAdded =  new EventEmitter<{serverName: string, serverStatus: string}>();
  newServerName = '';

  constructor() {}

  ngOnInit(): void {}

  onCreateServer(): void {
    const serverName = this.newServerName;
    const serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.newServerName = '';
    this.serverAdded.emit({serverName, serverStatus});
  }

}
