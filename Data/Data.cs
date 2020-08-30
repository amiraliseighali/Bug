using System;
using System.Collections.Generic;
using Bugs.Controllers;

namespace Bugs.Data
{
    public static class Data{
        public static List<Bug> Bugs => allBugs;
        static List<Bug> allBugs = new List<Bug>(){
            new Bug(){
        Id = 1,
        Title = "unresponsive button",
        Description = "the button doesnt work",
        Time = new DateTime(2019,08,08),
        }
        };
    }
    

}