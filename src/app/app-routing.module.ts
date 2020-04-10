import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { CarrierComponent } from './carrier/carrier.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { ParentComponent } from './parent/parent.component';
import { TempletFormComponent } from './templet-form/templet-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'


const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'carrier', component: CarrierComponent },
  // { path: 'product', loadChildren: './product/product.module#ProductModule'}, after creation of product module you can configure with Lazy Loading
  {
    path: 'product', component: ProductComponent, children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: LaptopComponent },
      { path: 'tv', component: LaptopComponent },
      { path: 'camera', component: LaptopComponent }
    ]
  },
  {
    path: 'parent', component: ParentComponent, children: [
      { path: 'laptop', component: LaptopComponent },
      { path: 'mobile', component: LaptopComponent },
      { path: 'tv', component: LaptopComponent },
      { path: 'camera', component: LaptopComponent }
    ]
  },
  { path: 'tempForm', component: TempletFormComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: '**', component: PageNotFoundComponent },
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
