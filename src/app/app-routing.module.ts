import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CheckinComponent } from "./components/staff/checkin/checkin.component";

const routes: Routes = [
  {
    path: "admin",
    loadChildren: () =>
      import("./modules/admin/admin.module").then((m) => m.AdminModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.Admin] }
  },
  {
    path: "staff",
    loadChildren: () =>
      import("./modules/staff/staff.module").then((m) => m.StaffModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.User] }
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./modules/auth/auth.module").then((m) => m.AuthModule),
    // canActivate: [AuthGuard],
    // data: { roles: [Role.User] }
  },
  {
    path: "shared",
    loadChildren: () =>
      import("./modules/shared-module/shared.module").then(
        (m) => m.SharedModule
      ),
  },
  {
    path: "checkin",
    component: CheckinComponent,
    // canActivate: [AuthGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
