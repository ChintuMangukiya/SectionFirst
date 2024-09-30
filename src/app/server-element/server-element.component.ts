import { AfterContentInit, Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit,OnChanges,AfterContentInit{

  @Input('srvElement') element: {
    type: string;
    name: string;
    content: string;
  };

  @Input() name:string;

  constructor(){
    console.log("Constructor is called!");
  }
  ngOnInit(): void {
    console.log("ngOnInit");
  }

   ngOnChanges(changes: SimpleChanges){
    console.log("ngOnChanges");
    console.log(changes);
   }

   ngAfterContentInit(): void {
     console.log("content");
   }
}

// interface abp{
//   firstName: string;
//   age: number;
//   greet: ()=> number;
// }

// let max:abp = {
//   firstName: 'max',
//   age: 1,
//   greet(){
//     return 8;
//   },
// }