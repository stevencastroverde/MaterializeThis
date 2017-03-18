import { Component, OnInit, OnChanges, AfterViewInit, Input, Output, Renderer, EventEmitter, forwardRef,
ViewChild} from '@angular/core';
import { NG_VALUE_ACCESSOR  } from '@angular/forms';
import * as CodeMirror from 'codemirror';


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
export class CodeMirrorComponent implements OnInit, OnChanges, AfterViewInit {
  @Output() change = new EventEmitter();
  @Output() focus = new EventEmitter();
  @Output() blur = new EventEmitter();
  @Output() editor = null;

  @ViewChild('code') code;

  config: any = {
    lineNumbers: true,
    mode: "htmlmixed",
    autofocus: true,
    theme: 'dracula'
  }

  content: string = `<!DOCTYPE html>
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
<footer>
  <!--footer goes HERE!-->

  </footer>

<script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
  </body>

  </html>`


  constructor(private renderer: Renderer) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.initCodeEditor(this.config);
    this.writeValue(this.content);

  }

  ngOnChanges() {

  }

  initCodeEditor(config) {
    this.editor = CodeMirror.fromTextArea(this.code.nativeElement, config);
    this.editor.setSize("100%", "100%");
    this.editor.setValue(this.content);

    this.editor.on('change', () => {
      this.updateValue(this.editor.getValue())
    });

    this.editor.on('focus', () => {
      this.focus.emit();
    });
    this.editor.on('blur', () => {
      this.blur.emit()
    });
  }

  updateValue(value) {
    this.content = value;
    this.onTouched();
    this.change.emit(value)
  }


  writeValue(value) {
    this.content = value || '';
    if (this.editor) {
      this.editor.setValue(this.content);
    }
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
