import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { GithubService } from "../../github.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  userLogin: string = "";
  user: any;
  repos: any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private gitService: GithubService
  ) {}

  ngOnInit() {
    this.userLogin = this.route.snapshot.params["id"];
    this.gitService.getUsers(this.userLogin).subscribe(res => {
      this.user = res;
    });
    this.gitService.getRepos(this.userLogin).subscribe(res => {
      this.repos = res;
    });
  }
}
