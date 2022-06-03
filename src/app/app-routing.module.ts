
//Module
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

//Component
import { NopagefoundComponent } from './nopagefound/nopagefound.component';




const routes: Routes = [
  {
    path: '**',
    component: NopagefoundComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
