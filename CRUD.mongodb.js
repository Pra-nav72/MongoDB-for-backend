// show dbs;
show('dbs');

// use <db_name>
use('MongoDYP')

// show collections
show('collections')

// db.students.find() ----> READ
db.getCollection('students').find()

// CREATE OPERATION
db.students.insertOne({
  name: "shanu",
  city: "delhi",
  skills: ["bgmi", "hiking", "bakaiti"]
})

db.students.find()

// UPDATE OPERATION
db.students.updateOne(
  {name: "shanu"},
  {$set: {city: "Rajgir"}}
)

// DELETE OPERATION
db.students.deleteOne({name: "shanu"})


db.students.find()