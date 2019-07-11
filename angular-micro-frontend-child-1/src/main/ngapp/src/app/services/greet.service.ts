import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetService {

  constructor() { }

  greet() {
    return 'Hello from ngapp-1';
  }
}
