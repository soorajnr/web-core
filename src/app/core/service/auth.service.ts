// services/auth.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login(username: string, password: string): Observable<any> {
    // Simulated login request (replace with actual login API call)
    if (username === 'user' && password === 'password') {
      return of({ username: 'user', role: 'admin' }).pipe(delay(1000)); // Mocking delay for asynchronous call
    } else {
      return of(null).pipe(delay(1000)); // Mocking delay for asynchronous call
    }
  }


}
