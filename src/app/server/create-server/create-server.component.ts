import { Component, EventEmitter, Input, Output, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-create-server',
  templateUrl: './create-server.component.html',
  styleUrls: ['./create-server.component.css']
})
export class CreateServerComponent implements OnInit{
  // tslint:disable-next-line: no-output-rename
  @Output('svrAdded') serverAdded =  new EventEmitter<{serverName: string, serverStatus: string}>();
  @ViewChild('serverNameInput', {static: true}) serverNameInput: ElementRef;

  constructor() {}

  ngOnInit(): void {
    // static is required only when serverNameInput is accessed in ngOnInit
  }

  onCreateServer(): void {
    const serverName = this.serverNameInput.nativeElement.value;
    const serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
    this.serverAdded.emit({serverName, serverStatus});
  }

}
