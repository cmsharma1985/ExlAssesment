import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByDurationComponent } from './search-by-duration/search-by-duration.component';


const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "home" },
  { path: "home", component: HomeComponent },
  { path: "contact-list", component: ContactListComponent },
  { path: "contact-create", component: CreateEmployeeComponent },
  { path: "search-list-by-name", component: SearchByNameComponent },
  { path: "search-list-by-timeDuration", component: SearchByDurationComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
