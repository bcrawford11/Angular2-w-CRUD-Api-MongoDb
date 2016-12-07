using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using MongoApi.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace MongoApi.Controllers
{
    [Route("api/Post")]
    public class PostAPIController : Controller
    {
        // GET: api/values

        DataAccess objds;

        public PostAPIController(DataAccess d)
        {
            objds = d;
        }

        [HttpGet]
        public IEnumerable<Post> Get()
        {
            return objds.GetPosts();
        }

        // GET api/values/5
        [HttpGet("{Id:length(24)}")]
        public IActionResult Get(string id)
        {
            var post = objds.GetPost(new ObjectId(id));
            if (post == null)
            {
                return NotFound();
            }
            return new ObjectResult(post);
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Post p)
        {
            objds.Create(p);
            return new OkObjectResult(p);
        }

        // PUT api/values/5
        [HttpPut("{Id:length(24)}")]
        public IActionResult Put(string id, [FromBody]Post p)
        {
            var recId = new ObjectId(id);
            var post = objds.GetPost(recId);
            if (post == null)
            {
                return NotFound();
            }
            objds.Update(recId, p);
            return new OkResult();
        }

        // DELETE api/values/5
        [HttpDelete("{Id:length(24)}")]
        public IActionResult Delete(string id)
        {
            var post = objds.GetPost(new ObjectId(id));
            if (post == null)
            {
                return NotFound();
            }
            objds.Remove(ObjectId.Parse(post.Id));
            return new OkResult();
        }
    }
}
