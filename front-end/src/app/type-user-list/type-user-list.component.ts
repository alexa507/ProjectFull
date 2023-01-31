import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { TypeUser } from '../models/type-user';
import { TypeUserServiceService } from '../services/type-user-service.service';

@Component({
  selector: 'app-type-user-list',
  templateUrl: './type-user-list.component.html',
  styleUrls: ['./type-user-list.component.css']
})
export class TypeUserListComponent implements OnInit {

  typeUsers: TypeUser[] = [];

  constructor(private typeUserService: TypeUserServiceService, private router: Router) { }

  ngOnInit() {
    this.typeUserService.findAll().subscribe(data => {
      this.typeUsers = data;
    });
  }

  addTypeUser() {
    this.router.navigate(['/typeuserform']);
  }

  deleteTypeUser(typeUser: TypeUser) {
    console.log(typeUser)
    this.typeUserService.delete(typeUser.idTypeUser).subscribe(data => {
      this.typeUserService.findAll().subscribe(data => {
        this.typeUsers = data;
      });
    });
  }

  editTypeUser(typeUser: TypeUser) {
    let navigationExtras: NavigationExtras = {
      queryParams: { 'id': typeUser.idTypeUser }
    }
    this.router.navigate(['/typeuserform'], navigationExtras);
  }
}
