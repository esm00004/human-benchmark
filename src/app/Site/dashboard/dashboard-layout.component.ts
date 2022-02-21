import { Component } from "@angular/core";
import { mock_sidebar_list } from "./mock_sidebar_list";
import { SideBarItemModel } from "./sidebar-item.model";

@Component({
    selector: 'hb-dashboard-layout',
    templateUrl: 'dashboard-layout.component.html'
})

export class DashboardLayoutComponent {
    games: SideBarItemModel [] = [];

    constructor () {
        for (var game of mock_sidebar_list) {
          this.games.push(game);
        }
      }
}