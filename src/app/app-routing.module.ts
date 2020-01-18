import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { TodoComponent } from './todo/todo.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'company/list', component: CompanyListComponent},
  {path: 'todo/list', component: TodoComponent},
  {path: 'company/edit/:id', component: CompanyEditComponent},
  {path: 'home', loadChildren: '../app/home/home.module#HomeModule'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
