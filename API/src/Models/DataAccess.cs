using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MongoApi.Models
{
    public class DataAccess
    {
        MongoClient _client;
        IMongoDatabase _db;

        public DataAccess()
        {
            _client = new MongoClient("mongodb://localhost:27017");
            _db = _client.GetDatabase("LGR");
        }
        public IEnumerable<Post> GetPosts()
        {
            return _db.GetCollection<Post>("post").Find(_ => true).ToList();
        }

        public Post GetPost(ObjectId id)
        {
            return _db.GetCollection<Post>("post").Find(x => x._id == id).FirstOrDefault();
        }

        public Post Create(Post p)
        {
            _db.GetCollection<Post>("post").InsertOne(p);
            return p;
        }

        public void Update(ObjectId id, Post p)
        {
            p._id = id;

            var res = Builders<Post>.Filter.Eq(pd => pd._id, id);
            var operation = Builders<Post>.Update
                .Set(u => u._id, id);
            _db.GetCollection<Post>("post").UpdateOne(res, operation);
        }
        public void Remove(ObjectId id)
        {
            _db.GetCollection<Post>("post").DeleteOne(a => a._id == id);
        }
    }
}
