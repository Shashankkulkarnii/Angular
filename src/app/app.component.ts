import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'HelloAngular';
  name = 'shashank kulkarni'
  ary=['red','blue','orange','black']
  obj={name:"shashank",class:"mca",city:"khandwa"}
}
