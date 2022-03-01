import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { userInfo } from './user-info.model';

@Component({
  selector: 'hb-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {
  myInfo: userInfo | undefined;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    console.log("Sending request to server");
    this.ShowUserInfo();
  }

  getUserInfo() {
    return this.http.get<userInfo>('https://human-benchmark-d54ce-default-rtdb.firebaseio.com/myinfo.json');
  }

  ShowUserInfo() {
    this.getUserInfo().subscribe((data: userInfo) => {
      console.log(data);
      this.myInfo = data;
    })
  }
}
