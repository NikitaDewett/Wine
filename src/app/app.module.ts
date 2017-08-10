import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { WinesPageComponent } from './wines-page/wines-page.component';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { OrdersComponent } from './orders/orders.component'
import {Routes, RouterModule} from '@angular/router';
import {DataTableModule,SharedModule} from 'primeng/primeng';
import { AllWinesComponent } from './wines-page/all-wines/all-wines.component';
import { DeliveredComponent } from './wines-page/delivered/delivered.component';
import { PurchasedComponent } from './wines-page/purchased/purchased.component';
import { ReturnedComponent } from './wines-page/returned/returned.component';
import { DeliveryComponent } from './orders/delivery/delivery.component';
import { ReturnsComponent } from './orders/returns/returns.component';
import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';
import { ModalModule } from 'ngx-bootstrap/modal';
import {DropdownModule} from 'primeng/primeng';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
const appRoutes: Routes =[
    { path: '', component: AppComponent,  children: [
        {path: '', component: HeaderComponent, children: [
          { path: 'wines', component: WinesPageComponent},
            { path: 'orders', component: OrdersComponent}
        ]}
    ]}
    
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    WinesPageComponent,
    OrdersComponent,
    AllWinesComponent,
    DeliveredComponent,
    PurchasedComponent,
    ReturnedComponent,
    DeliveryComponent,
    ReturnsComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    ModalModule.forRoot(),
    DataTableModule,
    Angular2FontawesomeModule,
    BrowserModule,
    DropdownModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
