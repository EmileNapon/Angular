import{Component} from '@angular/core';


@Component({
    selector:'h',
    templateUrl:'./h.html'
})

export class HComponent{
    comments=[
        {message:'bjr', date:new Date()},
        {message:'oui bjr ! comment tu vas ?', date:new Date()},
        {message:'Oui ca va !', date:new Date()},
    
    ]
}