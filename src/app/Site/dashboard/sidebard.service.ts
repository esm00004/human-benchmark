import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { SideBarItemModel } from "./sidebar-item.model";

@Injectable({
    providedIn: 'root'
})
export class DashboardsService {
    private baseUrl:string = "https://human-benchmark-d54ce-default-rtdb.firebaseio.com/";
    private dashboardsEndpoint:string = "sidebar.json";

    constructor(private http:HttpClient) {

    }

    public getDashboards() {
        return this.http.get<SideBarItemModel []>(this.baseUrl + this.dashboardsEndpoint);    
    }
}