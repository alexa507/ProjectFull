import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeUser } from '../models/type-user';
import { TypeUserServiceService } from '../services/type-user-service.service';

@Component({
  selector: 'app-type-user-form',
  templateUrl: './type-user-form.component.html',
  styleUrls: ['./type-user-form.component.css']
})
export class TypeUserFormComponent {

  userType: any;
  typeId: any;
  inEdit: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private typeUserService: TypeUserServiceService) {

  }

  ngOnInit() {
    this.typeId = this.route.snapshot.queryParamMap.get('id');
    if (this.typeId) {
      this.inEdit = true;
      this.typeUserService.findById(this.typeId).subscribe(data => {
        this.userType = data.typeUser;
      });
    }
  }

  create() {
    let typeUser = {} as TypeUser;
    typeUser.typeUser = this.userType;
    console.log(typeUser);
    this.typeUserService.save(typeUser).subscribe(result => this.gotoUserList());
  }

  update() {
    let typeUser = {} as TypeUser;
    typeUser.idTypeUser = this.typeId;
    typeUser.typeUser = this.userType;
    this.typeUserService.update(typeUser, this.typeId).subscribe(result => this.gotoUserList());
  }

  gotoUserList() {
    this.router.navigate(['/typeuserlist']);
  }
}
