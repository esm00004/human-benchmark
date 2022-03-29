import { Component, OnInit } from '@angular/core';
import { SideBarItemModel } from '../dashboard/sidebar-item.model';
import { DashboardsService } from '../dashboard/sidebard.service';

@Component({
  selector: 'hb-add-game',
  templateUrl: './add-game.component.html',
  styleUrls: ['./add-game.component.css']
})
export class AddGameComponent implements OnInit {

  constructor(public ds: DashboardsService) { }

  ngOnInit(): void {
  }

  addGame(game : SideBarItemModel) {
    console.log("You clicked add game");
    console.log(game);
    this.ds.addGame(game);
  }
}
