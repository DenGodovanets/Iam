import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ResumeComponent } from './resume/resume.component';
import { GuardGuard } from './core/guard.guard'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'resume', component: ResumeComponent, canActivate: [GuardGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
