using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace TodoApp.Controllers
{
    [Route("api/[controller]")]//api/todo
    [ApiController]
    public class TodoController : ControllerBase //nama yang berpengaruh sama routenya itu sblm Controller
    {
        [Route("TestRun")]
        [HttpGet]

        public ActionResult TestRun()
        {
            return Ok("Success");
        }
    }
}