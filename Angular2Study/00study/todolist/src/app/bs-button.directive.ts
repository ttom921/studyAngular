import { HostListener, Renderer, ElementRef, Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  @Input() appBsButton;
  @Input() mouseDownClass;

  constructor(private el: ElementRef, private renderer: Renderer) { }
  ngOnInit() {
     //const buton=(this.el.nativeElement as HTMLElement);
     //buton.classList.add('btn');
     //buton.classList.add('btn-primary');

    //this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    //this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton || 'primary' }`, true);

    this.appBsButton=this.appBsButton || 'primary';
    this.mouseDownClass=this.mouseDownClass || 'danger';
    this.renderer.setElementClass(this.el.nativeElement,'btn',true);
    this.renderer.setElementClass(this.el.nativeElement,`btn-${this.appBsButton}`,true);
  }
  @HostListener('mousedown') onMouseDown()  {
    console.log('mousedown');
    //移除原來的樣式
    this.renderer.setElementClass(this.el.nativeElement,`btn-${this.appBsButton}`,false);
     // 加入mousedown的樣式
     this.renderer.setElementClass(this.el.nativeElement,`btn-${this.mouseDownClass}`,true);
  }
  @HostListener('mouseup') onMouseUp() {
    console.log('mouseup');
    //移除mousedown的樣式
    this.renderer.setElementClass(this.el.nativeElement,`btn-${this.mouseDownClass}`,false);
    //加入原來的樣式
    this.renderer.setElementClass(this.el.nativeElement,`btn-${this.appBsButton}`,true);
  }
}
