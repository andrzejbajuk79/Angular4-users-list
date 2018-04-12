import { Component } from "@angular/core";
import { Customer } from "../customer/customer";
import {DataService} from '../../services/data.service'

@Component({
  moduleId: module.id,
    selector:'sandbox',
    styleUrls:['./sandbox.component.css' ],
    templateUrl: `./sandbox.component.html`
})

export class SandboxComponent{
  data: any[] = [];
  users:any[];
  user = {
    id: '',
    name: '',
    email : '',
    phone : ''
  }
  isEdit:boolean =false;

 birthday =  new Date(1981,1,15);
 text:string = 'alal ma kota';
 value: boolean = true;
 fireEvent(e){
  console.log(e.type);
}
changeValue(){
this.text= "goodbay world"
}

onDeleteClick(id){
  this.dataService.deleteUser(id).subscribe(res => {
    console.log(res);
    for(let i = 0; i < this.users.length; i++){
      if(this.users[i].id == id ){
        this.users.splice(i,1);
      }
    }
      
  });
}
onEditClick(user){
  this.isEdit =true;
  this.user = user;
}
constructor(public dataService: DataService){
// this.dataService.getData().subscribe(data => {
//   console.log(data);
//   this.data.push(data); 
// })
this.dataService.getUsers().subscribe(users => {
  console.log(users);
 this.users = users; 
 
})



}
onSubmit(isEdit) {
  if(isEdit){
    this.dataService.updateUser(this.user).subscribe(user => {
      for(let i = 0; i < this.users.length; i++){
        if(this.users[i].id == this.user.id ){
          this.users.splice(i,1);
        }
      }
      this.users.unshift(this.user);
    })
  }else{
    this.dataService.addUser(this.user).subscribe(user =>{
      console.log(user);
      
      this.users.unshift(user);
    })
    }
  
    }

  }