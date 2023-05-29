import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTabGroup} from "@angular/material/tabs";

@Component({
  selector: 'app-exoone',
  templateUrl: './exoone.component.html',
  styleUrls: ['./exoone.component.scss']
})
export class ExooneComponent {

  @ViewChild(MatTabGroup) tabGroup!: MatTabGroup;

  selectTab(tabIndex: number) {
    this.tabGroup.selectedIndex = tabIndex;
  }
}
