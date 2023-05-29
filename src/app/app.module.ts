import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProblemComponent } from './components/problem/problem.component';
import { WarmupComponent } from './components/warmup/warmup.component';
import { ExooneComponent } from './components/exoone/exoone.component';
import { ExotwoComponent } from './components/exotwo/exotwo.component';
import { ExampleComponent } from './components/example/example.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ProblemComponent,
    WarmupComponent,
    ExooneComponent,
    ExotwoComponent,
    ExampleComponent,
    FooterComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        MatTabsModule,
        MatButtonModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
