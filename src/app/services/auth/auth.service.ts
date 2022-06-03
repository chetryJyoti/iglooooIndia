import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  // async login(phone: string, password: string): Promise<any> {
    // return await this.storage.setStorage('uid', 'ahdhfdafshjsaf');
  // }
  login(phone: string, password: string){};
  regiter() {}
  resetPassword() {}
  logout() {}
}
