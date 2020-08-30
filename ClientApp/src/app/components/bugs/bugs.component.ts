import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/services/bug.service';

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  public bugs: Bug[];

  constructor(private service: BugService) { }

  ngOnInit() {
    this.service.getAllBugs().subscribe( data => { this.bugs = data; })
  } 

}
