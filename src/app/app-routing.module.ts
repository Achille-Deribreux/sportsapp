import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {ProblemComponent} from "./components/problem/problem.component";
import {WarmupComponent} from "./components/warmup/warmup.component";
import {ExooneComponent} from "./components/exoone/exoone.component";
import {ExotwoComponent} from "./components/exotwo/exotwo.component";
import {ExampleComponent} from "./components/example/example.component";

const routes: Routes = [
  {path : 'problem', component : ProblemComponent},
  {path : 'warmup', component : WarmupComponent},
  {path : 'firstexo', component : ExooneComponent},
  {path : 'secondexo', component : ExotwoComponent},
  {path : 'example', component : ExampleComponent},
  {path : 'home', component : HomeComponent},
  {path : '', component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
