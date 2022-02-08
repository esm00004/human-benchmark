import { Component, Input } from "@angular/core";

@Component({
    selector: 'hm-tests-card',
    templateUrl: 'tests.card.component.html',
    styleUrls: ['tests.card.component.css']
})
export class TestsCardComponent {
    @Input() img: string;
    @Input() title: string;
    @Input() description: string;

    constructor() {
        this.img = "./assets/HumanBenchmarkBoltEdited.png";
        this.title = "Reaction Time";
        this.description = "Test you visual reflexes.";
    }
}