import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavMenuComponent } from "./components/nav-menu/nav-menu.component";
import { HomeComponent } from "./components/home/home.component";
import { BugsComponent } from "./components/bugs/bugs.component";
import { DeleteBugComponent } from "./components/delete-bug/delete-bug.component";
import { NewBugComponent } from "./components/new-bug/new-bug.component";
import { ShowBugComponent } from "./components/show-bug/show-bug.component";
import { UpdateBugComponent } from "./components/update-bug/update-bug.component";
import { BugService } from "./services/bug.service";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { BugEffects } from "./store/bug.effects";
import { BugReducer } from "./store/bug.reducer";
import { AuthService } from "./services/auth.service";
import { AuthGuard } from "./auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BugsComponent,
    DeleteBugComponent,
    NewBugComponent,
    ShowBugComponent,
    UpdateBugComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "ng-cli-universal" }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: "", component: HomeComponent, pathMatch: "full" },
      {
        path: "bugs",
        component: BugsComponent,
        canActivate: [AuthGuard],
        pathMatch: "full",
      },
      {
        path: "delete-bug/:id",
        component: DeleteBugComponent,
        canActivate: [AuthGuard],
        pathMatch: "full",
      },
      {
        path: "new-bug",
        component: NewBugComponent,
        canActivate: [AuthGuard],
        pathMatch: "full",
      },
      {
        path: "update-bug/:id",
        component: UpdateBugComponent,
        canActivate: [AuthGuard],
        pathMatch: "full",
      },
      {
        path: "show-bug/:id",
        component: ShowBugComponent,
        canActivate: [AuthGuard],
        pathMatch: "full",
      },
    ]),
    //StoreModule.forRoot({ applicationState: BugReduce }),
    //EffectsModule.forRoot([BugEffects]),
  ],
  providers: [BugService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
