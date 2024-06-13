// src/core/auth/AuthService.ts
import { injectable } from 'tsyringe';
import { BehaviorSubject, Observable } from 'rxjs';

@injectable()
export class AuthService {
  private isAuthenticated$ = new BehaviorSubject<boolean>(false);

  login(username: string, password: string): Observable<boolean> {
    // Mock API call
    if (username === 'admin' && password === 'admin') {
      this.isAuthenticated$.next(true);
    } else {
      this.isAuthenticated$.next(false);
    }
    return this.isAuthenticated$.asObservable();
  }

  logout(): void {
    this.isAuthenticated$.next(false);
  }

  getAuthStatus(): Observable<boolean> {
    return this.isAuthenticated$.asObservable();
  }
}
