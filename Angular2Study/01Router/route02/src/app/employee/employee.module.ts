import { EmployeeRouteRoutingModule } from './employee-routing.module';
import { FileComponent } from './file/file.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressBookComponent } from './address-book/address-book.component';
import { LogbookComponent } from './logbook/logbook.component';
import { LeaveComponent } from './leave/leave.component';
import { ReimburseComponent } from './reimburse/reimburse.component';

@NgModule({
  imports: [
    CommonModule,
    EmployeeRouteRoutingModule
  ],
  declarations: [
    CalendarComponent,
    AddressBookComponent,
    LogbookComponent,
    ToDoListComponent,
    FileComponent,
    LeaveComponent,
    ReimburseComponent
  ]
})
export class EmployeeModule { }
