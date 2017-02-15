import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  users: Array<any> = [
      { id: 1, name: 'Bas Sondag',created_at: '2-15-2017', updated_at: '2-15-2017', completed: false },
      { id: 2, name: 'Barbara Mangan', created_at: '2-15-2017', updated_at: '2-15-2017', completed: false },
      { id: 3, name: 'Elise Sondag',  created_at: '2-15-2017', updated_at: '2-15-2017', completed: false }
    ]
    retrieveAll() {
      return this.users;
    }


  constructor() { }

}
