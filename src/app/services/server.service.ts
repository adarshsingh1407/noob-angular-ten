import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  servers: {name: string, status: string}[] = [];

  constructor() {
    this.servers.push({
      name: '1',
      status: 'online'
    });
  }

  addServer(newServer): void {
    this.servers.push(newServer);
  }

  changeFirstServerName(): void {
    this.servers[0].name = `Updated Server Name: ${new Date()}`;
  }
}
