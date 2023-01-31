import { Component, OnInit } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../models/user';
import { TypeUser } from '../models/type-user';
import { TypeUserServiceService } from '../services/type-user-service.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent {

  userId: any;
  inEdit: boolean = false;
  userTypes: any[] = [];
  name: any;
  firstName: any;
  email: any;
  selectedUserType: any;
  loaded: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private userService: UserServiceService, private typeUserService: TypeUserServiceService) {}

  ngOnInit() {
    this.typeUserService.findAll().subscribe(types => {
      types.forEach(type => {
        this.userTypes.push({
          label: type.typeUser,
          value: type.idTypeUser
        });
      })
      this.loaded = true;
    });

    this.userId = this.route.snapshot.queryParamMap.get('id');
    console.log(this.userId);
    if(this.userId) {
      this.inEdit = true;
      this.userService.findById(this.userId).subscribe(user => {
        this.name = user.name;
        this.firstName = user.firstName;
        this.email = user.email;
        this.userTypes.forEach(ut => {
          if(ut.value == user.idTypeUser) {
            this.selectedUserType = { label: ut.label, value: ut.value }
          }
        });
      });
    }
  }

  create() {
    let newUser = {} as User;
    newUser.email = this.email;
    newUser.firstName = this.firstName;
    newUser.name = this.name;
    newUser.idTypeUser = this.selectedUserType.value;
    this.userService.save(newUser).subscribe(result => this.gotoUserList());
  }

  update() {
    let newUser = {} as User;
    newUser.email = this.email;
    newUser.firstName = this.firstName;
    newUser.name = this.name;
    newUser.idTypeUser = this.selectedUserType.value;
    newUser.id = this.userId
    this.userService.update(newUser, this.userId).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/users']);
  }
}
