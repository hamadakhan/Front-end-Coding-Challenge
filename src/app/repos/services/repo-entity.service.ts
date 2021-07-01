import { Injectable } from "@angular/core";
import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from "@ngrx/data";
import { Repo } from "../models/repo.model";
import { RepoPage } from "../models/repoPage.model";

@Injectable()
export class RepoEntityService extends  EntityCollectionServiceBase<RepoPage> {
   
    constructor(
        serviceElementsFactory:
            EntityCollectionServiceElementsFactory) {

        super('Repo', serviceElementsFactory);

    }
}