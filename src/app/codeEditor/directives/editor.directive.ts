import { Directive, Renderer, AfterViewInit } from '@angular/core';

declare var CodeMirror: any;

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
        mode:{name: 'html', globalVars: true}
      }

    );
  }
}
