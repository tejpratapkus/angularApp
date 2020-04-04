import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

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
    NgForComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
