use('MongoDYP')

// 1. $exist: check if a field exists
db.products.find({price: {$exists: true}})
// all docs where price is available

// 2. $type: return data with matched type of the field
db.products.find({title: {$type: 'string'}})