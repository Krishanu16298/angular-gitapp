import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { UserComponent } from "./components/user/user.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "user/:id",
    component: UserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
