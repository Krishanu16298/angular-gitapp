import { Component, OnInit } from "@angular/core";
import { GithubService } from "../../github.service";

@Component({
  selector: "app-search",
  templateUrl: "./search.component.html",
  styleUrls: ["./search.component.css"]
})
export class SearchComponent implements OnInit {
  user: string = "";

  constructor(private gitService: GithubService) {}

  ngOnInit() {}

  onSubmit() {
    this.gitService.setUser(this.user);
  }
}
