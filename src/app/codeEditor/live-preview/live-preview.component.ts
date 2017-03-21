import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-live-preview',
  templateUrl: 'live-preview.component.html',
  styleUrls: ['live-preview.component.css']
})
export class LivePreviewComponent implements OnInit {
  private _code: string;

  @Input() set code(value: string){
    this.loadData(value);
  }

  @ViewChild('renderedCode') renderedCode:ElementRef;

  loadData(data){
    this.renderedCode.nativeElement.src = 'data:text/html;charset=utf-8,' + encodeURI(data)
  }

  constructor() { }

  ngOnInit() {
  }

}
