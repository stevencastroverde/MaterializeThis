

import { Component, OnInit, Input } from '@angular/core';
import { MaterializeComponentsService } from '../services/materialize-components.service'




@Component({
  selector: 'app-materialize-ui',
  templateUrl: 'materialize-ui.component.html',
  styleUrls: ['materialize-ui.component.css'],
  providers: [MaterializeComponentsService]
})



export class MaterializeUiComponent implements OnInit {
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


  ngOnInit() {
    this.getCards();
    console.log(this.components);
  }

}
