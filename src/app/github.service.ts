import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of, BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GithubService {
  private userSource = new BehaviorSubject<string>("");
  user = this.userSource.asObservable();

  constructor(private http: HttpClient) {}

  setUser(user: any) {
    this.userSource.next(user);
  }

  getUsers(user?: string): Observable<any[]> {
    let localurl = `https://api.github.com/users${user ? "/" : ""}${
      user ? user : ""
    }`;
    return this.http.get<any[]>(localurl);
  }
  getRepos(user: string): Observable<any[]> {
    return this.http.get<any[]>(`https://api.github.com/users/${user}/repos`);
  }
}
