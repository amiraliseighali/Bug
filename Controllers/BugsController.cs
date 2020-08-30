using Bugs.Data;
using Microsoft.AspNetCore.Mvc;

namespace Bugs.Controllers
{
    [Route("api/[controller]")]
    public class BugsController : Controller
    {
        private IBugService _service;
        public BugsController(IBugService service)
        {
            _service = service; 
        }
        [HttpPost("AddBug")]
        public IActionResult AddBug([FromBody]Bug bug){
            _service.AddBug(bug);
            return Ok();
        }
        [HttpGet("[Action]")]
        public IActionResult GetBugs(){
            var AllBugs = _service.GetAllBugs();
            return Ok(AllBugs);
        }
        [HttpPut("/UpdateBug/{id}")]
        public IActionResult UpdateBug(int id, [FromBody]Bug bug)
        {
            _service.UpdateBug(id, bug);
            return Ok(bug);

        }
        [HttpDelete("DeleteBug/{id}")]
        public IActionResult DeleteBug(int id)
        {
            _service.DeleteBug(id);
            return Ok();
        }

        //Get a single book by id
        [HttpGet("SingleBug/{id}")]
        public IActionResult GetBugById(int id)
        {
            var bug = _service.GetBugById(id);
            return Ok(bug);
        }
    }
}