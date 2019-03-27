import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { FormsModule } from '@angular/forms';

// angular material modules
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { AddProductComponent } from './add-product/add-product.component';
import { MatToolbarModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailedViewComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatListModule,
    MatIconModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    MatGridListModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
