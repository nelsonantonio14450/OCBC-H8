using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Kantor_WebAPI.Models;

namespace Kantor_WebAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private EmployeeContext _Context;

        public EmployeeController(EmployeeContext context)
        {
            this._Context = context;
        }

        //getnya
        public ActionResult<IEnumerable<EmployeeItem>> getEmployeeItems()
        {
            _Context = HttpContext.RequestServices.GetService(typeof(EmployeeContext)) as EmployeeContext;
            //returnnya
            return _Context.getAllEmployee();
        }

        //get: api/user/{id}

        [HttpGet("{id}", Name = "Get")]
        public ActionResult<IEnumerable<EmployeeItem>> GetEmployeeItem(string id){
            _Context = HttpContext.RequestServices.GetService(typeof(EmployeeContext)) as EmployeeContext;
            //returnnya
            return _Context.GetEmployee(id);
        }

    }
}
