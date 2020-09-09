import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/services/bug.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-bug',
  templateUrl: './update-bug.component.html',
  styleUrls: ['./update-bug.component.css']
})
export class UpdateBugComponent implements OnInit {

  bug: Bug;
  updateBugForm: FormGroup;
  constructor(private service: BugService, private fb: FormBuilder,private route: ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.service.getBugById(this.route.snapshot.params.id).subscribe(data =>{
      this.bug = data;
      this.updateBugForm = this.fb.group({
        id:[data.id],
        title:[data.title, Validators.required],
        description:[data.description, Validators.compose([Validators.required, Validators.minLength(10)])],
        time:[this.formatDate(data.time)],
    })
  })
  }
  formatDate(date: Date){
    if(date){
      return new Date(date).toISOString().substring(0,10);
    }
  }
  onSubmit(){
    this.service.updateBug(this.updateBugForm.value).subscribe(
      data => {this.router.navigate(["/bugs"]) }
      )
  }
}
