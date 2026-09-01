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






/**         Intermediate to Advance Problems */

// 41. find all orders placed by user Rahul
db.orders.find({
    user: {
        $regex: /rahul/i  // i==> case insesitive
    }
})

// 42. find orders whose total amount > 5000
db.orders.find({totalAmount: {$gt: 5000}})


// 43. find order placed after 1 january
db.orders.find({
    orderDate: {$gt: new Date('2025-01-01')}
})

// 44. find order with status delivered
db.orders.find({status: 'delivered'})


// 45. find orders which are not cancelled
db.orders.find({status: {$ne: 'cancelled'}})


// 46. increase product price by 10%
// db.products.updateMany({}, {$mul: {price: 1.10}})

// 47. increate product stock by 50
// db.products.updateMany({}, {$inc: {stock: 50}})

// 48.rename "price" to "productPrice"
// db.products.updateMany({}, {$rename: {'price': 'productPrice'}})

// 49. remove discount field from the product
// db.products.updateMany({}, {$unset: {discount: ""}})


// 50. add field 'featured: true' to products
db.products.updateMany({},{$set: {featured: true}})


// 51. delete product where stock is 0
db.products.deleteMany({stock: 0})


// 52. delete user who never placed any order
db.orders.find()

// db.products.find()
