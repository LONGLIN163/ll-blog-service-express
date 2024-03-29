
const db = require("../db.js");

exports.index=function(req,res){

    db.query("SELECT * FROM type",function(err,data){
        if(err){
          console.log("access type info wrong",err);
        }else{
          res.json({"data":data})
        }
    })
}

exports.getTypeInfo=function(req,res){

    db.query("SELECT * FROM type",function(err,data){
        if(err){
          console.log("access type info wrong",err);
        }else{
          res.json({"data":data})
        }
    })
}

exports.getArticleList=function(req,res){

    let sql = 'SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    'article.addTime as addTime,'+
    'article.view_count as view_count ,'+
    'type.typeName as typeName '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id'

    db.query(sql,function(err,data){
        if(err){
          console.log("access type info wrong",err);
        }else{
          res.json({"data":data})
        }
    })  
}

exports.getArticleById=function(req,res){

    let id=req.params.id;

    let sql='SELECT article.id as id,'+
    'article.title as title,'+
    'article.introduce as introduce,'+
    'article.article_content as article_content ,'+
    "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime,"+
    'article.view_count as view_count ,'+
    'type.typeName as typeName ,'+
    'type.id as typeId '+
    'FROM article LEFT JOIN type ON article.type_id = type.Id '+ 
    'WHERE article.id='+id

    db.query(sql,function(err,data){
        if(err){
          console.log("access type info wrong",err);
        }else{
          res.json({"data":data})
        }
    })  
}


exports.getListById=function(req,res){

  let id=req.params.id;

  let sql='SELECT article.id as id ,'+
  'article.title as title ,'+
  'article.introduce as introduce ,'+
  "FROM_UNIXTIME(article.addTime,'%Y-%m-%d %H:%i:%s' ) as addTime ,"+
  'article.view_count as view_count ,'+
  'type.typeName as typeName '+
  'FROM article LEFT JOIN type ON article.type_id=type.Id '+
  'WHERE type_id='+id

  db.query(sql,function(err,data){
      if(err){
        console.log("access type info wrong",err);
      }else{
        res.json({"data":data})
      }
  })  
}
