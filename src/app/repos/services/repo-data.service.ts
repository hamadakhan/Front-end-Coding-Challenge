import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { Repo } from "../models/repo.model";
import { RepoPage } from "../models/repoPage.model";
import { RepoPaginationService } from "./repo.service";
@Injectable()
export class RepoDataService  extends  DefaultDataService<RepoPage> {
    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator, private repoService:RepoPaginationService) {
        super('Repo', http, httpUrlGenerator);

    }

    getAll(): Observable<RepoPage[]> {
         return this.http.get<RepoPage[]>(`${environment.url_github}?q=created:%3E2017-10-22&sort=stars&order=desc&page=0`).pipe(map((repos:any)=> {
            this.repoService.onPageLoaded(repos.total_count,repos.incomplete_results)
            return [{...new RepoPage(repos),id:0}]
         } ))
    }

    
    getWithQuery(_query: any): Observable<RepoPage[]> {
        return this.http.get<RepoPage[]>(`${environment.url_github}?q=created:%3E2017-10-22&sort=stars&order=desc&page=${_query.pageNumber}`).pipe(map((repos:any)=> [{...new RepoPage(repos),id:_query.pageNumber}]))
   }
}