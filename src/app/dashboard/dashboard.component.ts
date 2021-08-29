import { Component, OnInit } from '@angular/core';
import { UsersApiService } from '../services/users-api.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  usersDetails: any;
  activeUser: any;
  isLoaded = false
  faCoffee = faTrash;

  constructor(private usersApi: UsersApiService) { }


  setActiveUser = (user) => {
    this.activeUser = user;
  }

  delete = (username) => {
    this.usersApi.deleteUser(username);
    this.activeUser = this.usersDetails.results[0]
  }

  async ngOnInit() {
    await this.usersApi.getUsersDetails()
    this.usersDetails = this.usersApi.usersData;
    this.activeUser = this.usersDetails.results[0]
    this.isLoaded = true
  }
}
