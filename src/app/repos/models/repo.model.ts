export class Repo {
    id!:number 
    name!:string 
    description!:string 
    owner!: Owner
    updated_at!: Date
    open_issues!: number
    stargazers_count!: number
    constructor(repo: any){
        repo = repo || {}
        this.id = repo.id  || undefined
        this.name = repo.name  || undefined
        this.description = repo.description  || undefined
        this.owner = new Owner(repo.owner)  || undefined
        this.updated_at = repo.updated_at  || undefined
        this.open_issues = repo.open_issues  || undefined
        this.stargazers_count = repo.stargazers_count  || undefined

    }
}

export class Owner{
    id!:number
    avatar_url!:string
    login!:string

    constructor(owner:any){
        owner = owner|| {}
        this.id =owner.id ||undefined
        this.avatar_url =owner.avatar_url ||undefined
        this.login =owner.login ||undefined
    }

}


export function compareRepo(c1:Repo, c2: Repo) {

    const compare =  c2.stargazers_count- c1.stargazers_count;
  
    if (compare > 0) {
      return 1;
    }
    else if ( compare < 0) {
      return -1;
    }
    else return 0;
  
  }