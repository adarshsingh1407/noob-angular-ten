import { Component, OnInit } from '@angular/core';
import { LoggingService } from './services/logging.service';
import { ServerService } from './services/server.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoggingService, ServerService]
})
export class AppComponent implements OnInit {
  title = 'noob-angular-ten';
  activeBrandId = 'TCP';
  servers: {name: string, status: string}[] = [];

  constructor(private loggingService: LoggingService, private serverService: ServerService) {}

  ngOnInit() {
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
