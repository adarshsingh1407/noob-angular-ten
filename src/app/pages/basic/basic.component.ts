import { Component, OnInit } from '@angular/core';
import { LoggingService } from 'src/app/services/logging.service';
import { ServerService } from 'src/app/services/server.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {

  activeBrandId = 'TCP';
  servers: {name: string, status: string}[] = [];

  constructor(private loggingService: LoggingService, private serverService: ServerService) {
    this.serverService.serverSelected.subscribe((selectedServerIndex: number) => this.loggingService.info(`Subscribed: ${selectedServerIndex}`));
  }

  ngOnInit(): void {
    this.servers = this.serverService.servers;
  }

  onServerAdded(newServer: {serverName: string, serverStatus: string}): void {
    this.serverService.addServer({name: newServer.serverName, status: newServer.serverStatus});
  }

  changeFirstServer(): void {
    this.serverService.changeFirstServerName();
  }

   handleServerSelected(selectedServerIndex: number): void {
     const selectedServer: {name: string, status: string} = this.servers[selectedServerIndex];
     this.loggingService.info(`ServerName: ${selectedServer.name}, Status: ${selectedServer.status}`);
   }


}
