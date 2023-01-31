import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{

  users: User[] = [];

  constructor(private userService: UserServiceService, private router: Router){}

  ngOnInit() {
    this.userService.findAll().subscribe(data => {
      this.users = data;
    });
  }
  
  addUser() {
    this.router.navigate(['/addusers']);
  }

  deleteUser(user: User) {
    this.userService.delete(user.id).subscribe(data=> {
      this.ngOnInit();
    });
  }

  editUser(user: User) {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': user.id }
    }
    this.router.navigate(['/addusers'], navigationExtras);
  }
}
