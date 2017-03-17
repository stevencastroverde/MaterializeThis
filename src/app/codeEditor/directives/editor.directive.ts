import { Directive, Renderer, AfterViewInit } from '@angular/core';
import * as CodeMirror from 'codemirror';


@Directive({
  selector: '[editor]'
})
export class EditorDirective {
  editor: any;

  constructor(private renderer: Renderer) { }

  ngAfterViewInit(){
    this.editor = CodeMirror.fromTextArea(
      this.renderer.selectRootElement('[editor]'),
      {
        lineNumbers: true,
        mode:{name:'text/html', tabMode: 'indent'},
        autofocus: true,

      }

    );
    this.editor.getDoc().setValue('<html> bitch')
  }

}
