import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { RepoListComponent } from './components/repo-list/repo-list.component';
import { RepoItemComponent } from './components/repo-item/repo-item.component';
import { EntityDataService, EntityDefinitionService, EntityMetadataMap } from '@ngrx/data';
import { RepoResolver } from './services/repo.resolver';
import { RepoEntityService } from './services/repo-entity.service';
import { RepoDataService } from './services/repo-data.service';
import { MomentModule } from 'ngx-moment';
import { RepoPaginationComponent } from './components/repo-pagination/repo-pagination.component';
import { RepoPaginationService } from './services/repo.service';
import { PaginatorPipe } from './pipes/paginator.pipe';
import { compareRepo } from './models/repo.model';
const entityMetadata: EntityMetadataMap = {
  Repo: {
  //  sortComparer: compareRepo,
    entityDispatcherOptions: {
      optimisticUpdate: true
    },

  }

};

@NgModule({
  declarations: [
    RepoListComponent,
    RepoItemComponent,
    PaginatorPipe,
    RepoPaginationComponent
  ],
  imports: [
    CommonModule,
    MomentModule,
    ReposRoutingModule
  ],
  providers:[
    RepoResolver,
    RepoEntityService,
    RepoDataService,
    RepoPaginationService,

  ]
})
export class ReposModule { 

  constructor(
    private eds: EntityDefinitionService,
    private entityDataService: EntityDataService,
    private repoDataService: RepoDataService,
  
  ) {

    eds.registerMetadataMap(entityMetadata);

    entityDataService.registerService('Repo', repoDataService);
   

  }
}
