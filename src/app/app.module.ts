import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AfficherclassComponent } from './afficherclass/afficherclass.component';
import { UpdateClassComponent } from './update-class/update-class.component';
import { FormsModule } from '@angular/forms';
import { ClassDetailsComponent } from './class-details/class-details.component';
import { FormClassComponent } from './form-class/form-class.component';

@NgModule({
  declarations: [
    AppComponent,
    AfficherclassComponent,
    UpdateClassComponent,
    ClassDetailsComponent,
    FormClassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
