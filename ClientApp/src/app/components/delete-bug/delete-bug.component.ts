import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/services/bug.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-bug',
  templateUrl: './delete-bug.component.html',
  styleUrls: ['./delete-bug.component.css']
})
export class DeleteBugComponent implements OnInit {

  bug: Bug;
  constructor(private service: BugService,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.service.getBugById(this.route.snapshot.params.id).subscribe(data => {
      this.bug = data;
    })
  }
  onSubmit(){
    this.service.deleteBug(this.bug.id).subscribe(data =>{
      this.router.navigate(["/bugs"])
    })
  }

}
