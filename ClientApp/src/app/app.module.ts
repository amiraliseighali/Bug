import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { BugsComponent } from './components/bugs/bugs.component';
import { DeleteBugComponent } from './components/delete-bug/delete-bug.component';
import { NewBugComponent } from './components/new-bug/new-bug.component';
import { ShowBugComponent } from './components/show-bug/show-bug.component';
import { UpdateBugComponent } from './components/update-bug/update-bug.component';
import { BugService } from './services/bug.service';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    BugsComponent,
    DeleteBugComponent,
    NewBugComponent,
    ShowBugComponent,
    UpdateBugComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'bugs', component: BugsComponent, pathMatch: 'full' },
      { path: 'delete-bug/:id', component: DeleteBugComponent, pathMatch: 'full' },
      { path: 'new-bug', component: NewBugComponent, pathMatch: 'full' },
      { path: 'update-bug/:id', component: UpdateBugComponent, pathMatch: 'full' },
      { path: 'show-bug/:id', component: ShowBugComponent, pathMatch: 'full' },
    ])
  ],
  providers: [BugService],
  bootstrap: [AppComponent]
})
export class AppModule { }
