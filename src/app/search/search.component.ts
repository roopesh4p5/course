import { Component ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  a=console.log("demo");



  val:string=""

@Output() csearch:EventEmitter<string>= new EventEmitter<string>();

search(){
  this.csearch.emit(this.val)
}
  
}
