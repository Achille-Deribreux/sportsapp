import {Component, ViewChild} from '@angular/core';
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-exotwo',
  templateUrl: './exotwo.component.html',
  styleUrls: ['./exotwo.component.scss']
})
export class ExotwoComponent {

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  selectTab(tabIndex: number) {
    this.tabGroup.selectedIndex = tabIndex;
  }
}
