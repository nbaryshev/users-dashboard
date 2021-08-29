import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  @Input() user: any;

  constructor(private usersApi:UsersApiService) { }

  ngOnInit(): void {
  }

}
