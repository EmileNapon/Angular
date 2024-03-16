import { Pipe, PipeTransform}  from '@angular/core'
@Pipe({
    name:'replacecomma'
})
export class replaceCommaPipe implements PipeTransform{

transform(value: any):string {
    if(!!value){
        return value.replace(/,/g, ".");
    }else{
        return '';
    }
}
}