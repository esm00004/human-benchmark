import { Component, Input } from "@angular/core";


@Component({
    selector: 'hb-dashboard-sidebar',
    templateUrl: 'dashboard-sidebar.component.html',
    styleUrls: ['dashboard-sidebar.component.css']
})
export class DashboardSidebarComponent {
    @Input() img: string;
    @Input() link: string;
    @Input() size: number;

    constructor() {
        this.img = "./assets/HumanBenchmarkBoltEdited.png";
        this.link = "Reaction Time";
        this.size = 50;
    }
}