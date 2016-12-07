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

        [BsonRepresentation(BsonType.ObjectId)]
        public string Id
        {
            get { return Convert.ToString(_id); }
            set { _id = MongoDB.Bson.ObjectId.Parse(value); }
        }

        [BsonElement("title")]
        public string Title { get; set; }
        [BsonElement("description")]
        public string Description { get; set; }
    }
}
