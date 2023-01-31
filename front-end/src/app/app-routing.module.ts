import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeUserFormComponent } from './type-user-form/type-user-form.component';
import { TypeUserListComponent } from './type-user-list/type-user-list.component';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path:'typeuserform', component: TypeUserFormComponent },
  { path:'typeuserlist', component: TypeUserListComponent },
  { path:'users', component: UserListComponent },
  { path:'addusers', component: UserFormComponent },
  { path: '', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }
