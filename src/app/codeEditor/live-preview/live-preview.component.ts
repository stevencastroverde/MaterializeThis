import {Component, OnInit, Input, ViewChild, ElementRef, OnChanges, SimpleChange} from '@angular/core';


@Component({
  selector: 'app-live-preview',
  templateUrl: 'live-preview.component.html',
  styleUrls: ['live-preview.component.css']
})
export class LivePreviewComponent implements OnInit {
  private _code: string;
  private starterText: string = `<h1>This Is your Live Preview!</h1> <h2>This view will change as add code </h2>`

  @Input() set code(value: string) {
    this._code = value;
    this.loadData(value);
  }


  @ViewChild('renderedCode') renderedCode: ElementRef;

  loadData(data) {
    let doc = this.renderedCode.nativeElement.contentWindow.document;
    doc.open();
    doc.writeln(data);
    doc.close();
  }

  constructor() {
  }

  ngOnInit() {
    this.loadData(this.starterText);
  }
}

