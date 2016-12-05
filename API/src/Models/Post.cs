using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace MongoApi.Models
{
    public class Post
    {
            [BsonId]
            public ObjectId _id { get; set; }
            [BsonElement("Title")]
            public string Title { get; set; }
            [BsonElement("Description")]
            public string Description { get; set; }
    }
}
