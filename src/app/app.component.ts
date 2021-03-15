import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noob-angular-ten';
  servers = [];
  activeBrandId = 'TCP';

  onServerAdded(newServer: {serverName: string, serverStatus: string}): void {
    this.servers.push({name: newServer.serverName, status: newServer.serverStatus});
  }

  changeFirstServer(): void {
    this.servers[0].name = `Updated Server Name: ${new Date()}`;
  }

}
