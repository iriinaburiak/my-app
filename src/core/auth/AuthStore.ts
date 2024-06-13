// src/core/auth/AuthStore.ts
import { injectable } from 'tsyringe';
import { AuthService } from './AuthService';
import { Observable } from 'rxjs';

@injectable()
export class AuthStore {
  constructor(private authService: AuthService) {}

  login(username: string, password: string): Observable<boolean> {
    return this.authService.login(username, password);
  }

  logout(): void {
    this.authService.logout();
  }

  isAuthenticated(): Observable<boolean> {
    return this.authService.getAuthStatus();
  }
}
