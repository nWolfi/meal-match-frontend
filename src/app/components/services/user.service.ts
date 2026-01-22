import { inject, Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { User } from '../../model/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendService = inject(BackendService);

  createUser(userDto: User) {
    return this.backendService.post('users', userDto);
  }
}
