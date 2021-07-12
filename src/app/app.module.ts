import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './mycomponents/nav-bar/nav-bar.component';
import { UserDataComponent } from './mycomponents/user-data/user-data.component';
import { SidebarComponent } from './mycomponents/sidebar/sidebar.component';
import { FeaturesComponent } from './mycomponents/features/features.component';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  // {path:'',component:NavBarComponent},
  {path:'',component:UserDataComponent},
  {path:'features',component:FeaturesComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    UserDataComponent,
    SidebarComponent,
    FeaturesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
