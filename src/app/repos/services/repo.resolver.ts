import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { RepoEntityService } from "./repo-entity.service";
import { filter, first, tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
@Injectable()
export class RepoResolver implements Resolve<any>{

     constructor(private repoEntityService:RepoEntityService){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.repoEntityService.loaded$
        .pipe(
            tap(loaded => {
                if (!loaded) {
                   this.repoEntityService.getAll();
                }
            }),
            filter(loaded => !!loaded),
            first()
        );
    }

}