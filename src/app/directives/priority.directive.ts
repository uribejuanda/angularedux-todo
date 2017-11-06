import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appPriority]'
})
export class PriorityDirective implements OnInit {

  @Input() appPriority;
  private classPriority;
  constructor(public renderer: Renderer2, public el: ElementRef) {
  }

  ngOnInit() {
      switch (this.appPriority) {
          case 'Low':
              this.classPriority = 'badge-success';
              break;
          case 'Medium':
              this.classPriority = 'badge-warning';
              break;
          case 'High':
              this.classPriority = 'badge-danger';
              break;
          default:
              this.classPriority = 'badge-success';
      }
      this.renderer.addClass(this.el.nativeElement, this.classPriority);
  }

}
