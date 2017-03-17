import { Component, OnInit, OnChanges, AfterViewInit, Renderer } from '@angular/core';



@Component({
  selector: 'app-code-mirror',
  templateUrl: 'code-mirror.component.html',
  styleUrls: ['code-mirror.component.css'],

})
export class CodeMirrorComponent implements OnInit, OnChanges, AfterViewInit {
  content: string;
  editor:CodeMirror.Editor;


  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){

  }

  ngOnChanges(){

  }
  getContent(){
    console.log(this.content);
  }

}
