import { Component, OnInit, Input } from '@angular/core';
import * as FileSaver from 'file-saver';
@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent implements OnInit {
  private _codeToDownload: string;


  @Input() set code(value: string){
    this._codeToDownload = value;
  }
  constructor() { }

  downloadFile(){
     let file = new File([this._codeToDownload], 'IhaveBeenMaterialized.html', {type:'text/html;charset=utf-8'});
     FileSaver.saveAs(file, 'IhaveBeenMaterialized.html');
  }

  ngOnInit() {
  }

}
