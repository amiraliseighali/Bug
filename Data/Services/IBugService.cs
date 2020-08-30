using System.Collections.Generic;
using Bugs.Controllers;

namespace Bugs.Data
{
    public interface IBugService
    {
        List<Bug> GetAllBugs();
        Bug GetBugById(int id);
        void UpdateBug(int id, Bug newBug);
        void DeleteBug(int id);
        void AddBug(Bug newBug);

    }
}