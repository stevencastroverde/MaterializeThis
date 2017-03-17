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
        mode:{name:'htmlmixed', tabMode: 'indent'},
        autofocus: true,
        theme: 'material'

      }

    );
    this.editor.getDoc().setValue(`
      <!DOCTYPE html>
      <html>

      <head>
      <title>MaterializeThis</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css">
      </head>

      <body>
        <header>
        //Drag your Navigation Elements HERE!!!
      
        </header>
        <main>
          //The content of the document......
      
      
        </main>
        <footer>
           //footer goes HERE!
      
        </footer>
      
       <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/js/materialize.min.js"></script>
      </body>

      </html>
`)
  }

}
