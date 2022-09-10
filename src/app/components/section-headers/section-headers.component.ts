import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-headers',
  templateUrl: './section-headers.component.html',
  styleUrls: ['./section-headers.component.scss']
})
export class SectionHeadersComponent implements OnInit {
  @Input() title:string;
  @Input() button:boolean;
  @Input() desc:string;
  constructor() { }

  ngOnInit(): void {
  }

}
