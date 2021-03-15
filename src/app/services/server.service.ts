import { LoggingService } from './logging.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServerService {

  servers: {name: string, status: string}[] = [];

  constructor(private loggingService: LoggingService) {
    this.servers.push({
      name: '1',
      status: 'online'
    });
  }

  addServer(newServer): void {
    this.servers.push(newServer);
  }

  changeFirstServerName(): void {
    const newName = `New Name: ${new Date()}`;
    this.servers[0].name = newName;
    this.loggingService.info(`Updated Server Name: ${newName}`);
  }
}
