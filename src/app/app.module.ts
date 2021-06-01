import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";

  //FIREBASE IMPORTS
  import { AngularFireModule } from "@angular/fire";
  import { AngularFireDatabaseModule } from "@angular/fire/database";
  import { AngularFirestoreModule } from "@angular/fire/firestore";


  //MATERIAL IMPORTS
  import { MatInputModule } from "@angular/material/input";
  import { MatButtonModule } from "@angular/material/button";
  import { MatFormFieldModule } from "@angular/material/form-field";


import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UsersComponent } from './pages/users/users.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importExpr } from '@angular/compiler/src/output/output_ast';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
