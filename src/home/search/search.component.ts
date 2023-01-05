import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string = ''; //whatever value user will enter through UI will be assigned to this variable
  @Output()
  searchTextChanged: EventEmitter<string> =  new EventEmitter<string>();

  //call this method whenever user type in textbox
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.enteredSearchValue);
  }


}
