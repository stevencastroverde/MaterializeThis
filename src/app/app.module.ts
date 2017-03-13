import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { MaterializeUiComponent } from './materialize-ui/materialize-ui.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'about', component: AboutComponent },
  { path: 'code', component: CodeEditorComponent}
]


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    MaterializeUiComponent,
    LandingPageComponent,
    CodeEditorComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
