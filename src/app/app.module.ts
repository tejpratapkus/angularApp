import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './mainContainer/app.mainComponentContainer';
import { TopNavComponent } from './mainContainer/top-nav/top-nav.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { ClassStyleComponent } from './class-style/class-style.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwowayDataBindingComponent } from './twoway-data-binding/twoway-data-binding.component';
import { from } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMyBootstrapComponent } from './ngx-my-bootstrap/ngx-my-bootstrap.component';
//ngx-bootstrap
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { NgifComponent } from './ngif/ngif.component';
import { NgSwitchComponent } from './ng-switch/ng-switch.component';
import { NgForComponent } from './ng-for/ng-for.component';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';
import { CarrierComponent } from './carrier/carrier.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductComponent } from './product/product.component';
import { LaptopComponent } from './product/laptop/laptop.component';
import { CardComponent } from './carrier/card/card.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './parent/child/child.component';
import { Cart1Component } from './profile/cart1/cart1.component';
import { Cart2Component } from './profile/cart2/cart2.component';
import {DesignUtilServiceService} from './appServices/design-util-service.service';
import {HttpClientModule} from '@angular/common/http';
import { Comp1Component } from './home/comp1/comp1.component';
import { Comp2Component } from './home/comp2/comp2.component';
import { Comp3Component } from './home/comp3/comp3.component';
import { Comp4Component } from './home/comp4/comp4.component';
import { LoginCompComponent } from './login/login-comp/login-comp.component';
import { TestDirectiveDirective } from './appDirectives/test-directive.directive';
import { UxPipesPipe } from './appPipes/ux-pipes.pipe';
import { FilterPipesPipe } from './appPipes/filter-pipes.pipe';
import { TempletFormComponent } from './templet-form/templet-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component'

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TopNavComponent,
    DatabindingComponent,
    ClassStyleComponent,
    EventBindingComponent,
    TwowayDataBindingComponent,
    NgxMyBootstrapComponent,
    NgifComponent,
    NgSwitchComponent,
    NgForComponent,
    HomeComponent,
    BlogComponent,
    ProfileComponent,
    CarrierComponent,
    LoginComponent,
    PageNotFoundComponent,
    ProductComponent,
    LaptopComponent,
    CardComponent,
    ParentComponent,
    ChildComponent,
    Cart1Component,
    Cart2Component,
    Comp1Component,
    Comp2Component,
    Comp3Component,
    Comp4Component,
    LoginCompComponent,
    TestDirectiveDirective,
    UxPipesPipe,
    FilterPipesPipe,
    TempletFormComponent,
    ReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot(),
    HttpClientModule
  ],
  providers: [DesignUtilServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
