import { Component, OnInit, ViewChild } from '@angular/core';
import {MdSidenav} from "@angular/material";

@Component({
  selector: 'app-code-editor',
  templateUrl: 'code-editor.component.html',
  styleUrls: ['code-editor.component.css']
})
export class CodeEditorComponent implements OnInit {
  code: string;
  copyCode: string;

  @ViewChild('start') sidenav: MdSidenav;

  editorChangeHandler(event: string){
    this.code = event;
  }

sidenavOpen(start: any){
    start.toggle();
}

dragHandler($event: any){
    console.log($event);
}


  constructor() {

  }

  ngOnInit() {
  }

}
