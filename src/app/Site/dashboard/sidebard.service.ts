import { Injectable } from "@angular/core";
import { SideBarItemModel } from "./sidebar-item.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';

@Injectable({
    providedIn: 'root'
})
export class DashboardsService {
    constructor(private db:AngularFireDatabase) {

    }

    public getDashboards() {
          return this.db.list<SideBarItemModel>("sidebar").valueChanges();
    }

    addGame(game : SideBarItemModel) {
        this.db.list<SideBarItemModel>("sidebar").push(game);
    }
}