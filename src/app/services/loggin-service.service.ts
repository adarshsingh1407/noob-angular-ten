import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogginServiceService {

  info(message: string): void {
    console.info(message);
  }

}
