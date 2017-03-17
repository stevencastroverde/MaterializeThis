import { Component, OnInit, OnChanges, AfterViewInit, ElementRef } from '@angular/core';
import * as CodeMirror from 'codemirror';


@Component({
  selector: 'app-code-mirror',
  templateUrl: 'code-mirror.component.html',
  styleUrls: ['code-mirror.component.css'],

})
export class CodeMirrorComponent implements OnInit, OnChanges, AfterViewInit {
  height:number;
  editor:CodeMirror.Editor;
  editorNativeElement:any;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  ngOnChanges(){

  }

}
