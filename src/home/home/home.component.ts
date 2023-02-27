import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudHttpService } from 'src/core/crud-http.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  searchText: string = '';
  constructor(
    private crudHttpService: CrudHttpService,
    private router: Router,
    public searchService: SearchService
  ) {}

  ngOnInit(): void {
    if (!this.crudHttpService.isLoggedin()) {
      this.router.navigate(['/login']);
    }
  }

  searchProduct() {
    console.log('t', this.searchText);
    this.searchService.searchProduct(this.searchText).subscribe((s) => {
      console.log('s', s);
    });
  }
}
