import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoResolver } from './services/repo.resolver';

const routes: Routes = [
  {
    path:'',
    component:RepoListComponent,
    resolve:{
      data:RepoResolver
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
