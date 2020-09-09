import { Component, OnInit } from "@angular/core";
import { BugService } from "src/app/services/bug.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { AppState } from "src/app/store/app.state";
import { Store } from "@ngrx/store";
import * as bugActions from "./../../store/bug.actions";

@Component({
  selector: "app-bugs",
  templateUrl: "./bugs.component.html",
  styleUrls: ["./bugs.component.css"],
})
export class BugsComponent implements OnInit {
  public bugs: Bug[];
  //public bugs$: Observable<any>;

  constructor(private service: BugService, private router: Router) {}
  // constructor(
  //   private service BugService;
  //   private store: Store<AppState>,
  //   private router: Router) {
  //     this.bugs$ = this.store.select("applicationState");
  //   }

  ngOnInit() {
    this.service.getAllBugs().subscribe((data) => {
      this.bugs = data;
    });
    //this.store.dispatch(new bugActions.loadBugsAction());
    //this.bugs$.subscribe((state: AppState) => this.bugs = state.bugs);
  }
  showBug(id: number) {
    this.router.navigate(["/show-bug/" + id]);
  }
  deleteBug(id: number) {
    this.router.navigate(["/delete-bug/" + id]);
  }
}
