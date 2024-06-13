// src/core/di/container.ts
import { container } from 'tsyringe';
import { AuthService } from '../AuthService';
import { AuthStore } from '../AuthStore';

container.register(AuthService, { useClass: AuthService });
container.register(AuthStore, { useClass: AuthStore });

export { container };
