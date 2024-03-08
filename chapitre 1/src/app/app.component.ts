import { Component, Input} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {Title=[{title:''}]
  isAuth=false;
  
  appareilOne=''
  
 constructor(){
  setTimeout(()=>{this.isAuth=true}, 5000)
 }
  onToutAllumer(){
    console.log('tout est allumer')
  }
}
