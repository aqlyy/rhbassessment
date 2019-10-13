import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SearchPageComponent } from './search-page.component';
import { RouterModule } from '@angular/router';
import { CroptextPipe } from 'src/app/pipes/croptext.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: SearchPageComponent }
    ]),
    FormsModule,
    NgxPaginationModule
  ],
  declarations: [
    SearchPageComponent,
    CroptextPipe
  ]
})
export class SearchPageModule { }
