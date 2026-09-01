use('MongoDYP-exercise');

show('collections');

// 26. find product where price>1000
db.products.find({price: {$gt: 1000}})

// 27. product whose 500<price<2000
db.products.find({price: {$gt: 500, $lt: 2000}})


// 28. product belongs to category: 'electronics'
db.products.find({category: 'electronics'}).sort({price: -1})


// 29. find product with stock less than 10
db.products.find({stock: {$lt: 10}})


// 30. find out of stock product
db.products.find({stock: 0})


// 31. find product sorted by price low to high
db.products.find().sort({price: 1})


// 32. find top five most expensive product
db.products.find().sort({price: -1}).limit(5)


// 33. find products whose name contain phone
db.products.find({
    name: {$regex: /phone/}
})

// 34. find products whose discount>20
db.products.find({discount: {$gt: 20}})


// 35. find products that do not belong to electronics category
db.products.find({category: {$ne: 'electronics'}})

// 36. find products having tag gaming
db.products.find({tags: {$in: ['gaming']}})
db.products.find({tags: 'gaming'}) // bcox 1 tag to find 'gaming' otherwise $in means any of element available in the given array.

// 37. find products having both gaming and laptop tags
db.products.find({tags: {$all: ['gaming', 'laptop']}})

db.products.find({
    $and: [
        {tags: {$in: ['gaming']}},
        {tags: {$in: ['laptop']}}
    ]
})


// 38. find products having exactly 3 tags
db.products.find({
    tags: {$size: 3}
})


// 39. add new tag 'new' to a product
db.products.updateOne({name :'Gaming Laptop'},
    {$push: {tags: 'new'}}
)


// 40. Remove tag old from a product
db.products.updateOne({name: 'Gaming Laptop'}, {
    $pull: {tags: 'new'}
})

db.products.find()
