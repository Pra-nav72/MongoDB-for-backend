// Ordered insert:
// if insertMany() found any runtime error after creating 2 docs
// then the 3rd and remaining all will not be created even if they are correct
// because the 3rd docs got an error

use('MongoDYP')
show('collections')

db.createCollection('users2')

db.users2.insertMany([
    {_id:1, name:"ritesh"},
    {_id: 2, name:"demon"},
    {_id: 1, name: "naman"},
    // 👇 this will not created bcoz ☝️ got an runtime error
    {_id: 3, name: "abhi"}
])


// unordered: you will get the error, but the non-error documents will get created.

db.users2.insertMany([
    {_id:4, name: "nidhi"},
    {_id:5, name: "gunnu"},
    {_id:4, name: "shristi"},
    {_id:6, name: "shristika"}
], {ordered: false})