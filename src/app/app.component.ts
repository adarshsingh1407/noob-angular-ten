import { Component } from '@angular/core';
import { LogginServiceService } from './services/loggin-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogginServiceService]
})
export class AppComponent {
  title = 'noob-angular-ten';
  servers = [];
  activeBrandId = 'TCP';

  constructor(private loggingService: LogginServiceService) {}

  onServerAdded(newServer: {serverName: string, serverStatus: string}): void {
    this.servers.push({name: newServer.serverName, status: newServer.serverStatus});
  }

  changeFirstServer(): void {
    this.servers[0].name = `Updated Server Name: ${new Date()}`;
  }

   handleServerSelected(selectedServerIndex: number): void {
     const selectedServer: {name: string, status: string} = this.servers[selectedServerIndex];
     this.loggingService.info(`ServerName: ${selectedServer.name}, Status: ${selectedServer.status}`);
   }

}
