import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FileComponent } from './file/file.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book/address-book.component';
import { LogbookComponent } from './logbook/logbook.component';
import { LeaveComponent } from './leave/leave.component';
import { ReimburseComponent } from './reimburse/reimburse.component';

const routes: Routes = [
  { path: '', redirectTo: 'to-do-list', pathMatch: 'full' },
  { path: 'address-book', component: AddressBookComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'file', component: FileComponent },
  { path: 'leave', component: LeaveComponent },
  { path: 'logbook', component: LogbookComponent },
  { path: 'reimburse', component: ReimburseComponent },
  { path: 'to-do-list', component: ToDoListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRouteRoutingModule { }

