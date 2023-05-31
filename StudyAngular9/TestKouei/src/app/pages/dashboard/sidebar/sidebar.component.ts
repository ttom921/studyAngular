import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Output() navClicked = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
  handleClicked(ev: Event) {
    ev.preventDefault();
    this.navClicked.emit();
  }

}
