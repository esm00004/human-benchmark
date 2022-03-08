import { Component, OnInit } from "@angular/core";
import { mock_sidebar_list } from "./mock_sidebar_list";
import { SideBarItemModel } from "./sidebar-item.model";
import { DashboardsService } from "./sidebard.service";

@Component({
  selector: 'hb-dashboard-layout',
  templateUrl: 'dashboard-layout.component.html'
})

export class DashboardLayoutComponent implements OnInit {
  games: SideBarItemModel[] = [];


  constructor(private dashboardsService: DashboardsService) {
    
  }

  ngOnInit(): void {
    this.dashboardsService.getDashboards().subscribe(data => {
      console.log("fetching product data");
      for (var dashboard of data) {
        console.log(dashboard);
        this.games.push(dashboard);
      }
    })
  }
}