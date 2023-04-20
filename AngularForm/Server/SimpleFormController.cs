using AngularForm.Models;
using AngularForm.Service;
using Microsoft.AspNetCore.Mvc;

namespace AngularForm.Server
{
    [ApiController]
    [Route("api/[controller]")]
    public class SimpleFormController : Controller
    {
        private readonly FileService _fileService;

        public SimpleFormController(FileService service)
        {
            _fileService = service;
        }

        [HttpPost("[action]")]
        public IActionResult SubmitName([FromBody] Name name)
        {
            var success = _fileService.CreateJsonFile(name);

            if (!success)
            {
                return NotFound("Failed to create the JSON file.");
            }
            return Ok();
        }
    }
}
