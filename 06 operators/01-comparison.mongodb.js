use('MongoDYP')

//1. price== 499.99
db.products.find({price: {$eq: 499.99}})

//2. price != 14.99
db.products.find({price: {$ne: 14.99}})

//3. price > 12.99
db.products.find({price: {$gt: 12.99}}, {title:1, category:1, price:1,})

//4. price >= 12.99
db.products.find({price: {$gte: 300.99}}, {title:1, category:1, price:1,})

//5. $lt, $lte

//7. $in operator selects documents where the value of a specific field matches any value within a specified array
db.products.find({category: {$in: ["furniture", "beauty", "frangrances"]}})

//8. $nin selects all the docs where value of a specific field do not matches any value within a specified array
db.products.find({category: {$nin: ["furniture", "fragrances", "beauty"]}})

