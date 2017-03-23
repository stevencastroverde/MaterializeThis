import { Component, OnInit, OnChanges, AfterViewInit, Input, Output, Renderer, EventEmitter, forwardRef,
ViewChild} from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/htmlmixed/htmlmixed';


@Component({
  selector: 'app-code-mirror',
  templateUrl: 'code-mirror.component.html',
  styleUrls: ['code-mirror.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CodeMirrorComponent),
    multi: true
  }]

})
export class CodeMirrorComponent implements  AfterViewInit {
  private _dragCode:string;
  @Output() change = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() editor = null;
  @Input() set dragCode(value:string){
    this._dragCode = value;
  }
  @ViewChild('code') code;


  config: any = {
    lineNumbers: true,
    mode: "htmlmixed",
    autofocus: true,
    autoCloseTags: true,
    dragDrop: true,
    theme: 'dracula'
  }
  private content: string;
  starter: string = `<!DOCTYPE html>
  <html>

  <head>
    <title>MaterializeThis</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
</head>

<body>
  <header>
    <!--Drag your Navigation Elements HERE!!!-->

    </header>
<main>
  <!--The content of the document......-->


  </main>
<div class="footer">
  <!--footer goes HERE! Be sure to uncomment Script Tag as Well!!!-->

  </div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
  </body>

  </html>`;


  constructor() {
  }


  ngAfterViewInit() {
    this.initCodeEditor(this.config);

  }


  initCodeEditor(config) {
    this.editor = CodeMirror.fromTextArea(this.code.nativeElement, config);
    this.editor.setSize("100%", "100%");
    this.editor.setValue(this.starter);

    this.editor.on('change', (instance:CodeMirrorComponent, $event:any) => {
      let doc = this.editor.getDoc();
      this.updateValue(doc.getValue())
    });

    this.editor.on('focus', () => {
      this.focus.emit();
    });
    this.editor.on('blur', () => {
      this.blur.emit()
    });
    this.editor.on('drop', ( instance: CodeMirrorComponent, $event:any)=>{
      let xCoord = $event.pageX;
      let yCoord = $event.pageY;
      let coords= {left: xCoord, top: yCoord};
      let dropLocation = this.editor.coordsChar(coords);
      let token = this.editor.getTokenAt(dropLocation);
      let doc = this.editor.getDoc();
      doc.replaceRange(this._dragCode,{line:(dropLocation.line), ch:token.start }, {line:dropLocation.line, ch:token.end})

    })
  }

  updateValue(value) {
    this.content = value;
    this.onTouched();
    this.change.emit(value)
  }

  onChange(_) {
  }

  onTouched() {
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouched = fn;
  }
}
