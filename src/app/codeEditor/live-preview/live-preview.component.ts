import {Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChange} from '@angular/core';


@Component({
  selector: 'app-live-preview',
  templateUrl: 'live-preview.component.html',
  styleUrls: ['live-preview.component.css']
})
export class LivePreviewComponent implements OnInit, OnChanges {
  private _code: string;

  @Input() set code(value: string){
    this._code = value;
  }


  @ViewChild('renderedCode') renderedCode:ElementRef;

  loadData(data){
    this.renderedCode.nativeElement.src = 'data:text/html;charset=utf-8,' + encodeURI(data)
  }

  constructor() { }

  ngOnInit() {

  }
ngOnChanges(changes:any): void{
    console.log(changes);
  if(changes.code.previousValue === undefined){
    this.loadData(changes.code.currentValue);
  } else if (changes.code.currentValue !== changes.code.previousValue){
    this.loadData(changes.code.currentValue);
  } else {
    console.log('no changes to render')
  }
}

}
