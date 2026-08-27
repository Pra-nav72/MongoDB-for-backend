use('MongoDYP')

// 1. $and
db.products.find({
    $and: [{price: {$gte: 399}}, {category: "furniture"}]
})

// [NOTE]: db.products.find({ category: "clothing", price: { $lt: 20 } }) ===> implicitly uses $and

// 2. $or
db.products.find({
    $or:[
        {price: {$gte: 455}},
        {stock: {$gte: 70}}
    ]
})

// 3. $nor: neither value satisfies
db.products.find({
    $nor:[
        // 200 < price <= 450
        {price: {$lt: 200}},
        {price: {$gte: 450}}
    ]
})

// $not
db.products.find({
    $and: [
        {price: {$gt: 400}},
        {stock: {$not: {$lt: 40}}} // stokc >= 40
    ]
})