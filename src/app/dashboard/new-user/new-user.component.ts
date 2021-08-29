import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersApiService } from 'src/app/services/users-api.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements OnInit {

  openAddUser = false;
  userForm: FormGroup;

  constructor(private usersApi: UsersApiService) { }

  toggleForm = () => {
    this.openAddUser = !this.openAddUser;
  }

  onSubmit = () => {
    this.usersApi.addNewUser(this.userForm.value)
    .then(
      (value) => {
        this.toggleForm();
        this.userForm.reset();
        alert(value);
      },
      (error) => {
        alert(error);
      }
    )
  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      userName: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required),
      secondName: new FormControl('', Validators.required),
      age: new FormControl('', Validators.required),
      country: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      cell: new FormControl('', Validators.required)
    })
  }

}
