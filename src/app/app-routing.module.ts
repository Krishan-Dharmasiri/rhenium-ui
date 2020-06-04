import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './dashboard/layouts/default/default.component';
import { DashboardComponent } from './dashboard/components/dashboard/dashboard.component';
import { PostsComponent } from './dashboard/components/posts/posts.component';


// const routes: Routes = [
//   {
//     path:'',
//     component:DefaultComponent,
//     children:[
//       {
//         path:'',
//         component:DashboardComponent
//       },
//       {
//         path:'posts',
//         component:PostsComponent
//       }
//     ]
//   }
// ];

const routes: Routes = [
  {
    path:'', component:DefaultComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'predictive',
        component:PostsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
