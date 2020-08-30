using System.Collections.Generic;
using System.Linq;
using Bugs.Controllers;

namespace Bugs.Data
{
    public class BugService : IBugService
    {
        public List<Bug> GetAllBugs(){
            return Data.Bugs.ToList();
        }
        public void DeleteBug(int id)
        {
            var bug = Data.Bugs.FirstOrDefault(n => n.Id == id);
            Data.Bugs.Remove(bug);
        }
        public Bug GetBugById(int id)
        {
            return Data.Bugs.FirstOrDefault(n => n.Id == id);
        }
        public void UpdateBug(int id, Bug newBug){
            var oldBug = Data.Bugs.FirstOrDefault(n => n.Id == id);
            if(oldBug != null){
                oldBug.Title = newBug.Title;
                oldBug.Description = newBug.Description;
                oldBug.Time = newBug.Time;  
            }
        }
        public void AddBug(Bug newBug){
            Data.Bugs.Add(newBug);   
        }
    }

}