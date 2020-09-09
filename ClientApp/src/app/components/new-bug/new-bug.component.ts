import { Component, OnInit } from '@angular/core';
import { BugService } from 'src/app/services/bug.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-bug',
  templateUrl: './new-bug.component.html',
  styleUrls: ['./new-bug.component.css']
})
export class NewBugComponent implements OnInit {
  addBugForm: FormGroup;
  showError: Boolean = false;
  constructor(private service: BugService, private fb: FormBuilder,private router: Router) { }

  ngOnInit() {
    this.addBugForm = this.fb.group({
      id:[Math.floor(Math.random()*1000)],
      title:[null, Validators.required],
      description:[null, Validators.compose([Validators.required, Validators.minLength(10)])],
      time:[null],
    })
  }
  onSubmit(){
    this.service.addBug(this.addBugForm.value).subscribe(
      data => {this.router.navigate(["/bugs"]);
     },error => {
       this.showError = true;

     })
    }
  }
