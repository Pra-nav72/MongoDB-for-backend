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

// find number of documents
db.students.countDocuments() // db.students.countDocuments({})

// increment age of all student by 4
db.students.updateMany({}, {$inc: {age: 4}}) // $inc for increment

// delete whose age > 30
db.students.deleteMany({age: {$gt : 30}})
db.students.find()