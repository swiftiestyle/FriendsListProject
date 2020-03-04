const mongodb= require("mongodb").MongoClient;
let dbpassword= "uditgoel" ;
const url = `mongodb+srv://uditgoel:${dbpassword}@cluster0-b4oxs.mongodb.net/test?retryWrites=true&w=majority` ;
let collection= "";
function connect(){
    mongodb.connect(url, { useNewUrlParser: true },function(err,client){
        if(err) throw err;
        let db= client.db("Friends");
        collection= db.collection("User");
        console.log("Connected to `" + "Friends database" + "`!");
        
        
    })
}
function insertDoc(data){
    collection.insertOne({key:data},function(err,result){
        if(err) throw err;
        
    })
}
function viewDoc(cb){
 collection.find({}).toArray(cb);
}

module.exports= {
    connect:connect,
    insertDoc:insertDoc,
    viewDoc:viewDoc
}