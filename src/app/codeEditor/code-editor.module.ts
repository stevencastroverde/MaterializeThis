import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { CodeMirrorComponent } from './code-mirror/code-mirror.component';
import { LivePreviewComponent } from './live-preview/live-preview.component';
import { CodeEditorComponent } from './code-editor/code-editor.component';
import { MaterializeUiComponent } from './materialize-ui/materialize-ui.component';

// Code Mirror
import { EditorDirective } from './directives/editor.directive';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'code', component: CodeEditorComponent}
    ])
  ],
  declarations: [
    CodeMirrorComponent,
    LivePreviewComponent,
    CodeEditorComponent,
    MaterializeUiComponent,
    EditorDirective
  ]
})
export class CodeEditorModule { }
