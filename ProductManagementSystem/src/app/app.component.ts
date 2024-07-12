import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public actions = [ {title:"Home", icons:"bi bi-house", route:"/home"},
  {title:"Products", icons:"bi bi-search", route:"/products"},
  {title:"New product", icons:"bi bi-safe", route:"/newProduct"}]
}

