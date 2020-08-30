using System;

namespace Bugs.Controllers
{
    public class Bug
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime? Time { get; set; }
    }
}