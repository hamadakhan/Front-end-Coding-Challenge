import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Repo } from '../../models/repo.model';
import { RepoPage } from '../../models/repoPage.model';
import { RepoEntityService } from '../../services/repo-entity.service';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RepoListComponent implements OnInit {
   repos$!: Observable<RepoPage | undefined>;
   loading$!: Observable<boolean>;
   currentPage = 0
  constructor(private repoEntityService:RepoEntityService) { }

  ngOnInit(): void {
   this.loading$ = this.repoEntityService.loading$.pipe(
     tap(data=>{
       console.log(data);
       
     })
   )
  
  }
  

  onPageLoad(page:number){
    this.currentPage = page
   // this.currentPage=page
   this.repos$ = this.repoEntityService.entities$.pipe(
     tap(repos=>{
       console.log(repos);
      let repo =  repos.find(repo=>repo.id == this.currentPage) 
      if(!repo) this.repoEntityService.getWithQuery({pageNumber:page.toString()})

     }),
    map(repos=>{
      console.log(repos);
      
       return  repos.find(repo=>repo.id == this.currentPage)
      
    })
  )
  }
}
