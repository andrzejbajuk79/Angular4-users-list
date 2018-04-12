  import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { SandboxComponent } from './components/sandbox/sandbox.component';
import { DataService } from './services/data.service';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ListComponent } from './components/list/list.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { componentFactoryName } from '@angular/compiler';

const appRoutes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'list', component:SandboxComponent},
  {path:'user/:id', component:UserDetailsComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    SandboxComponent,
    HomeComponent,
    AboutComponent,
    NavbarComponent,
    ListComponent,
    UserDetailsComponent  
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [DataService],
  bootstrap: [AppComponent] 
})
export class AppModule { }
