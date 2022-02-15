import { Component } from "@angular/core";
import { mock_tests_list } from "../tests/mock_tests_list";
import { TestItemModel } from "../tests/test-item.model";

@Component({
    selector: 'hm-home-layout',
    templateUrl: 'home-layout.component.html'
})

export class HomeLayoutComponent {
    tests: TestItemModel [] = [];

    constructor () {
        for (var test of mock_tests_list) {
          this.tests.push(test);
        }
      }
}
