import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RepoEntityService } from '../../services/repo-entity.service';
import { RepoPaginationService } from '../../services/repo.service';

@Component({
  selector: 'app-repo-pagination',
  templateUrl: './repo-pagination.component.html',
  styleUrls: ['./repo-pagination.component.scss']
})
export class RepoPaginationComponent implements OnInit {
  currentPage=0
  total_count:number=0
  pages!: Array<number>;
 @Output() onPageChange = new EventEmitter()
  constructor( private repoService:RepoPaginationService) { }

  ngOnInit(): void {
    this.getNextPage()
     this.total_count=this.repoService.total_count
    
  }
   

  getNextPage(){
    this.currentPage++
  
    
    this.onPageChange.emit(this.currentPage)
    
   
   
  }
  getPage(page:number){
    this.currentPage = page+1
    this.onPageChange.emit(this.currentPage)
  }


  getPreviousPage(){
   if(this.currentPage>1){
    this.currentPage--
    this.onPageChange.emit(this.currentPage)
   } 
    
  }
}
