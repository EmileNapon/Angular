import {Component} from '@angular/core'

@Component({
    selector:'pageDeRouting-roop',
    templateUrl: './pageDeRouting.component.html'
})

export class pageDeRoutingComponent{
    title='Bienvenue sur la pagination'

    public listeElements=[{element:'home', routes:'app/home'},
                   {element:'products', routes:'app/products'},
                   {element:'new Product', routes:'app/newProduct'}]
}