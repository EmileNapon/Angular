import { Component } from "@angular/core";

@Component({
    selector:"home-root",
    templateUrl:"./home.component.html"
})

export class Home{
    public actions = [ {title:"Home", icons:"bi bi-house", route:""},
                {title:"Products", icons:"bi bi-search", route:"/products"},
                {title:"New product", icons:"bi bi-safe", route:"/newProduct"}]

}