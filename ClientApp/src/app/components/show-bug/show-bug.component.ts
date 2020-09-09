import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/services/bug.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-bug',
  templateUrl: './show-bug.component.html',
  styleUrls: ['./show-bug.component.css']
})
export class ShowBugComponent implements OnInit {
  bug: Bug;
  constructor(private service: BugService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.service.getBugById(this.route.snapshot.params.id).subscribe(data => {
      this.bug = data;
    })
  }

}
