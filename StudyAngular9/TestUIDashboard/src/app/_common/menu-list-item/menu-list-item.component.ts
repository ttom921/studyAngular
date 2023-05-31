import { Component, OnInit, HostBinding, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, transition, animate, style } from '@angular/animations';
import { NavItem } from './nav-item';
import { NavService } from './nav.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-list-item',
  templateUrl: './menu-list-item.component.html',
  styleUrls: ['./menu-list-item.component.scss'],
  animations: [
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition('expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      )
    ]),
  ]
})
export class MenuListItemComponent implements OnInit {
  expanded: boolean;
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  @Input() item: NavItem;
  @Input() depth: number;
  constructor(
    public navService: NavService,
    public router: Router) {
    if (this.depth === undefined) {
      this.depth = 0;
    }
  }

  ngOnInit() {
    this.navService.currentUrl.subscribe((url: string) => {
      if (this.item.route && url) {
        //console.log(`Checking '/${this.item.route}' against '${url}'`);
        this.expanded = url.indexOf(`/${this.item.route}`) === 0;
        this.ariaExpanded = this.expanded;
        //console.log(`${this.item.route} is expanded: ${this.expanded}`);
      }
    });
  }
  onItemSelected(item: NavItem) {
    if (!item.children || !item.children.length) {
      this.router.navigate([item.route]);
      this.navService.coloseNav();

    }
    if (item.children && item.children.length) {
      this.expanded = !this.expanded;
    }
  }
  checkNgStyle(item) {
    let myStyles;
    myStyles = {
      'padding-left': `${this.depth * 12}px`,
      'display': item.disabled ? 'none' : '',
    };
    return myStyles;
  }

}
