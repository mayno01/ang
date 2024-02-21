import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AfficherclassComponent } from './afficherclass/afficherclass.component';
import { UpdateClassComponent } from './update-class/update-class.component';
import { FormClassComponent } from './form-class/form-class.component';

const routes: Routes = [

  { path: 'classes', component: AfficherclassComponent },
  { path: 'update-class/:id', component: UpdateClassComponent },
  { path: 'addclass', component: FormClassComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
