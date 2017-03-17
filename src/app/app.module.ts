import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './StaticPages/nav-bar/nav-bar.component';
import { FooterComponent } from './StaticPages/footer/footer.component';
import { LandingPageComponent } from './StaticPages/landing-page/landing-page.component';
import { AboutComponent } from './StaticPages/about/about.component';
import { PageNotFoundComponent } from './StaticPages/page-not-found/page-not-found.component';

//Modules
import {CodeEditorModule} from "./codeEditor/code-editor.module";


const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: PageNotFoundComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    LandingPageComponent,
    AboutComponent,
    PageNotFoundComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CodeEditorModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
