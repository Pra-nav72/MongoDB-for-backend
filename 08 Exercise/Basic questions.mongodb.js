use('MongoDYP-exercise');

// coll: users

//1. find all user from delhi
db.users.find({city: 'Delhi'});

// 2. find users with age > 25
db.users.find({age: {$gt: 25}}).sort({age: -1})

// 3. users with age <= 30
db.users.find({age: {$lte: 30}})

// 4. user whose city is not Mumbai
db.users.find({city: {$ne: 'Mumbai'}})




//5. users age b/w 20 and 30
db.users.find({age: {$gt: 20, $lt: 30}}).sort({age: 1})

// db.users.find({
//     $and: [
//         {age: {$gt: 20}},
//         {age: {$lt: 30}}
//     ]
// })





// 6. show only name and email of all the users
db.users.find({}, {name:1, email:1, _id:0})






// 7. find users with name starts with R
db.users.find({
    name: {$regex: '^R'}
})

// work same as above
db.users.find({
    name: /^R/
})






// 8. find users whose email contains gmail
db.users.find({
    email: {$regex: "gmail"}
})

// 9.find users whose city field exist
db.users.find(
    {city: {$exists: true}}
)

// 10. find users whose phone no. do not exist
db.users.find({
    phone: {$exists: false}
})




// 11. show only first 5 users
db.users.find().limit(5)

// 12. skip first 5 user and show next 2
db.users.find().skip(5).limit(2);


// 13. find users whose age is either 25, 20, 30
db.users.find({
    age: {$in: [20, 25, 30]}
})

//  14. find users whose age is not 20, 25 or 30
db.users.find({age: {$nin: [20, 25, 30]}})

// ******************************
// 15. count total users in db
db.users.countDocuments()
db.users.find().count()

// 16. find users whose name is Rahul Sharma & city is Delhi
db.users.find({
    $and: [
        {name: 'Rahul Sharma'},
        {city: 'Delhi'}
    ]
})

// 17. find users whose city is Delhi or Mumbai
db.users.find({
    $or: [
        {city: 'Delhi'},
        {city: 'Mumbai'}
    ]
})

// 18. find users whose age !> 30
db.users.find({
    age: {$not: {$gt: 30}}
}).sort({age: -1})

db.users.find({age: {$lte: 30}})

// 19. find users whose name ends with 'a': (2 method)
db.users.find({
    name: /a$/
})

db.users.find({
    name: {$regex: 'a$'}
})


// 20. find users whose email domain is yahoo.com
db.users.find({
    email: /yahoo\.com$/
})
db.users.find({
    email: {$regex: 'yahoo\.com$'}
})


// 21. find user whose age field type is number
db.users.find({
    age: {$type: 'number'}
})


// ******************************
// 22. find users whose age is even
db.users.find({
    age: {$mod:[2, 0]}
})


// ******************************
// 23. find users whose name length > 11 chars
db.users.find({
    $expr: {
        $gt:[
            {$strLenCP: '$name'}, 11
        ]
    }
})
