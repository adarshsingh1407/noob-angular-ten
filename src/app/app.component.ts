import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'noob-angular-ten';
  servers = [];
  newServerName = '';

  onUpdateServerName = (event: Event) => {
    this.newServerName = ( event.target as HTMLInputElement).value;
  }

  onCreateServer = () => {
    this.servers.push({name: this.newServerName, status: Math.random() > 0.5 ? 'online' : 'offline'});
    this.newServerName = '';
  }
}
