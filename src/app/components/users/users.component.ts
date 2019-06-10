import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../github.service";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  userName: string = "";
  users: any[] = [];
  constructor(private gitService: GithubService) {}

  ngOnInit() {
    this.gitService.user.subscribe(res => {
      this.userName = res;
      this.gitService.getUsers(this.userName).subscribe(res => {
        this.users = [];
        this.users = this.users.concat(res);
      });
    });
  }
}
