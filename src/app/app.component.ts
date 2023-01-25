import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'new';
  panelOpenState = false;

  accordionList:any;

  @ViewChild('accordion',{static:true}) Accordion!: MatAccordion

  constructor() {
    this.accordionList = [
      {
        id:"panel-1",
        title:"Panel One",
        description:"Description One",
        isDisabled:false,
        isExpanded:false
      },{
        id:"panel-2",
        title:"Panel Two (Disabled)",
        description:"Description Two",
        isDisabled:true,
        isExpanded:false
      },{
        id:"panel-3",
        title:"Panel Three",
        description:"Description Three",
        isDisabled:false,
        isExpanded:true
      },
    ]
   }

  ngOnInit() {
  }

  beforePanelClosed(panel: { isExpanded: boolean; }){
    panel.isExpanded = false;
    console.log("Panel going to close!");
  }
  beforePanelOpened(panel: { isExpanded: boolean; }){
    panel.isExpanded = true;
    console.log("Panel going to  open!");
  }

  afterPanelClosed(event:any){
    console.log("Panel closed!");
  }
  afterPanelOpened(event:any){
    console.log("Panel opened!");
  }


  closeAllPanels(event:any){
    this.Accordion.closeAll();
  }
  openAllPanels(event:any){
    this.Accordion.openAll();
  }
}

