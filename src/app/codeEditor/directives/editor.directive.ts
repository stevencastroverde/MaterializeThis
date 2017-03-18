import { Directive, Renderer} from '@angular/core';
import * as CodeMirror from 'codemirror';


@Directive({
  selector: '[editor]'
})
export class EditorDirective {
  editor: any;
  starterHtml: string = `<!DOCTYPE html>
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

  </html>`

  constructor(private renderer: Renderer) { }

  ngAfterViewInit(){
    this.editor = CodeMirror.fromTextArea(
      this.renderer.selectRootElement(''),
      {
        lineNumbers: true,

        mode: "htmlmixed",
        autofocus: true,
        theme: 'dracula'


      }

    );
    this.editor.setValue(this.starterHtml);
  }

}
