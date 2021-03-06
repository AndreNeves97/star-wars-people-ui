import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeopleRoutingModule } from './people-routing.module';

import { PeopleListPageComponent } from './presenter/pages/people-list/people-list-page/people-list-page.component';
import { PeopleListTableComponent } from './presenter/pages/people-list/components/people-list-table/people-list-table.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PeopleListViewControllersComponent } from './presenter/pages/people-list/components/people-list-view-controllers/people-list-view-controllers.component';
import { SortableDirective } from '../core/components/table/directives/sortable/sortable.directive';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PeopleListPageComponent,
    PeopleListTableComponent,
    PeopleListViewControllersComponent,
    SortableDirective,
  ],
  imports: [CommonModule, PeopleRoutingModule, NgbModule, ReactiveFormsModule],
})
export class PeopleModule {}
