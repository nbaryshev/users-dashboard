import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {
  usersData: any

  constructor(private http:HttpClient) { }

  getUsersDetails = () => {
    return this.http.get('/api')
      .toPromise()
      .then((resp) => {this.usersData = resp;})
      .catch(err => console.log(err));
  }

  addNewUser = (user) => {
    return new Promise((resolve, reject) => {
      if (!this.userNameUniqCheck(user.userName)) {
        let newUser = {
          email: user.email,
          login: { username: user.userName},
          cell: user.cell,
          dob: { age: user.age },
          name: { first: user.name, last: user.secondName },
          location: { country: user.country, city: user.city },
          picture: { large: 'assets/thumbnail.png', thumbnail: 'assets/thumbnail.png' },
          registered: {date: new Date()}
        }
        this.usersData.results.push(newUser);
        resolve("User was added successfully")
      } else {
        reject("User with such username already exists")
      }
      
    })
    
  }

  userNameUniqCheck = (username) => {
    let userNameExists = false

    if (this.usersData.results.some(elem => elem.login.username === username)) {
      userNameExists = true;
    }
    return userNameExists;
  }

  //Assuming usernames are uniq
  deleteUser = (username) => {
    let index = this.usersData.results.findIndex(elem => elem.login.username == username)
    this.usersData.results.splice(index, 1);
  }

}
