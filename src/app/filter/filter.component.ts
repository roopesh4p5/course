import { Component, Input ,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent  {
  selected:string='all';
  @Input() free:number=0;
  @Input() paid:number=0;
  @Input() all:number=0;

  @Output() filtr:EventEmitter<string>=new EventEmitter<string>();

  changebtn(){
    this.filtr.emit(this.selected);
  }
}
