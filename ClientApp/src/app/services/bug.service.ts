import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BugService {

  _baseURL: string = "api/bugs";
  constructor(private http: HttpClient) { }
  //service for the bug component to call api
  getAllBugs(){
    return this.http.get<Bug[]>(this._baseURL+"/GetBugs");
  }
  addBug(bug: Bug){
    return this.http.post(this._baseURL+"/AddBug/", bug);
  }
  getBugById(id: number){
    return this.http.get<Bug>(this._baseURL+"/SingleBug/"+id);
  }
  updateBug(bug: Bug){
    return this.http.put(this._baseURL+"/UpdateBug/"+bug.id,bug);
  }
  deleteBug(id: number){
    return this.http.delete(this._baseURL+"/DeleteBug/"+id);
  }
}
