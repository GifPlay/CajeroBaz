import {RouterModule, Routes} from '@angular/router';
import {RetiroComponent} from "./components/cajero/retiro/retiro.component";
import {NgModule} from "@angular/core";

export const routes: Routes = [
  { path: "", component: RetiroComponent },
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
