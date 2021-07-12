import { APP_ID, Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})

export class UserDataComponent implements OnInit {
  
fetchapi(){
 return fetch("https://jsonplaceholder.typicode.com/todos/1").then(response=>{
    return response.json();
  }).then(result=>{
    return result
  })
}

  constructor() {
   }

  ngOnInit(): void {
  }

}


