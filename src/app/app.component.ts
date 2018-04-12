import { Component } from '@angular/core';
import { DataService } from './services/data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    name: '',
    email : '',
    phone: ''
    

  }
  users:  any[];
  
  constructor(public dataService : DataService){
   
  }
  

}
