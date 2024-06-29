import { Component, OnInit} from "@angular/core";
import { SocieteService } from "./SocieteService/societe.service";

@Component({
    selector: 'Societe-root',
    templateUrl: './societe.component.html'
})

export class SocieteComponent implements OnInit{
    constructor( private societeService: SocieteService){

    }
    ngOnInit(): void {
        this.societeService.listeSociete
    }
    title='component societe'
 
}