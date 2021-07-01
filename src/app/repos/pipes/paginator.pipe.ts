import { Pipe, PipeTransform } from '@angular/core';
import { FormArrayName } from '@angular/forms';

@Pipe({
    name: 'paginator',
    pure: false
})
export class PaginatorPipe implements PipeTransform
{
    /**
     * Transform
     *
     * @param {any[]} value
     * @param {number} currentPage
     * @returns {any}
     */
    transform(value: number, currentPage: number): any
    {
       
        console.log(value,currentPage);
         let array = [
            currentPage-4,
            currentPage-3,
            currentPage-2,
            currentPage-1,
            currentPage,
            currentPage+1,
            currentPage+2,
            currentPage+3,
            currentPage+4,
        ].filter(a=>a>=0)
         console.log(array);
         
        return array
       
        

    }
}
