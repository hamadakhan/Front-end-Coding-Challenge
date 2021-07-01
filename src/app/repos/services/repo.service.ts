import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";

@Injectable()
export class RepoPaginationService {
    total_count: number = 0
    incomplete_results: boolean = false
    onIncompteResultatChnge: Subject<boolean> 
    constructor(){
        this.onIncompteResultatChnge = new Subject()
    }


    onPageLoaded(_total_count:number,_incomplete_results:boolean){
       this.total_count = _total_count
       this.incomplete_results= _incomplete_results
       this.onIncompteResultatChnge.next(this.incomplete_results)
    }
}