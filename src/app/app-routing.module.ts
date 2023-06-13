import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContentComponent } from './components/content/content.component';

const routes: Routes = [
  {path:'',redirectTo:'home/1',pathMatch: 'full'},
  {path:'home/',component:AppComponent,
    children:[
      {path: ':id',component:ContentComponent}
    ]
  },
  // {path:'*',component:}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
