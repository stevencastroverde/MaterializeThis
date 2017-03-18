import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-live-preview',
  templateUrl: 'live-preview.component.html',
  styleUrls: ['live-preview.component.css']
})
export class LivePreviewComponent implements OnInit {
  private _code: string;

  @Input() set code(value: string){
    this._code = value;
  }

  constructor() { }

  ngOnInit() {
  }

}
