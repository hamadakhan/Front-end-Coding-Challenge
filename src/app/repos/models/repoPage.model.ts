import { Repo } from "./repo.model";

export class RepoPage {
    id!:number
    items!:Repo[]
    incomplete_results!:boolean
    total_count!:number

    constructor(repoPage:any){
        repoPage = repoPage || {}
        this.id = repoPage.id || undefined
        this.incomplete_results = repoPage.incomplete_results || undefined
        this.total_count = repoPage.total_count || undefined
        this.items = repoPage.items.map((item:any)=>new Repo(item)) || undefined
    }
}