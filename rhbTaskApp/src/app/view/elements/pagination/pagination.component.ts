import { Component, OnInit, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() maxPage: number;
  selectedPage: number = 5;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['maxPage']) {
    }
  }

  changePage(pageNum: number) {
    [].forEach.call(document.querySelectorAll('.page-numbers'), function (el) {
      el.classList.remove('current');
    });
    this.selectedPage = pageNum;
  }

}
