import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './front/landing-page/landing-page.component';

const routes: Routes = [
  {
    path: 'landingPage',
    component: LandingPageComponent,
    loadChildren: () => import('./front/front.module').then(m => m.FrontModule),
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }