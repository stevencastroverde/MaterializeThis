

import { Component, OnInit, Input } from '@angular/core';
import { MaterializeComponentsService } from '../services/materialize-components.service'




@Component({
  selector: 'app-materialize-ui',
  templateUrl: 'materialize-ui.component.html',
  styleUrls: ['materialize-ui.component.css'],
  providers: [MaterializeComponentsService]
})



export class MaterializeUiComponent implements OnInit {

  constructor(private materializeComponentsService: MaterializeComponentsService) { }

  getCards(){
    this.materializeComponentsService.getCards()
      .subscribe(
        data => {console.log(data)}
      )
  }


  ngOnInit() {
    this.getCards();
  }

}
