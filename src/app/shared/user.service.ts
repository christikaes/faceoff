import { Injectable } from '@angular/core';

@Injectable()
export class ApiService {
  user = '';

  public setUser = function(user){
    this.user = user;
  }
}
