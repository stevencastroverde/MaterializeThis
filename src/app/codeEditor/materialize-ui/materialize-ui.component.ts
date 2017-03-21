

import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { MaterializeComponentsService } from '../services/materialize-components.service'




@Component({
  selector: 'app-materialize-ui',
  templateUrl: 'materialize-ui.component.html',
  styleUrls: ['materialize-ui.component.css'],
  providers: [MaterializeComponentsService]
})



export class MaterializeUiComponent implements OnInit {
  @Output() dragOver: EventEmitter<any> = new EventEmitter


  components: Array<any> = [];
  constructor(private materializeComponentsService: MaterializeComponentsService) { }

  getCards(){
     this.materializeComponentsService.getCards()
      .subscribe(
        data => {
          if(Array.isArray(data)){
            this.components = data;
          } else {
            this.components.push(data)
          }}
      )
  }
  dragHandler(component: any){
    this.dragOver.emit(component.html);
  }

  ngOnInit() {
    this.getCards();
    console.log(this.components);
  }

}
