import { EventEmitter, Injectable, Output } from '@angular/core';
import { LoggingService } from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  @Output() serverSelected = new EventEmitter<number>();

  servers: {name: string, status: string}[] = [];

  constructor(private loggingService: LoggingService) {
    this.servers.push({
      name: '1',
      status: 'online'
    });
  }

  addServer(newServer: {name: string, status: string}): void {
    this.servers.push(newServer);
  }

  changeFirstServerName(): void {
    const newName = `New Name: ${new Date()}`;
    this.servers[0].name = newName;
    this.loggingService.info(`Updated Server Name: ${newName}`);
  }
}
