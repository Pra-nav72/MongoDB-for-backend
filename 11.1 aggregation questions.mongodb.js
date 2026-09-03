use('MongoDYP')

show('collections')

db.products.find({category: 'beauty'})

// using aggregation
db.products.aggregate([

    // stage-1: find product where category is beauty
    {$match: {category: 'beauty'}},

    // always use map in

    // stage-2: projections
    {$project: {
      title: 1, category: 1, price: 1, _id:0, tags:1
    }},

    // stage-3: sorting based on price
    {$sort:{price: -1}},

    // stage-4: unwind - used on array
    {$unwind: '$tags'}

])

/**
 * $group is one of the most important/fundamental part of mongoDB aggregation
 * it is used to categorized documents by a specific 'group key' 
 * and perform calculation on the grouped data
 * 
 * db.sales.aggregate([
 *    {
 *      $group:{
 *          _id: category,   ---> group by category field
 *          totalRevenue: {$sum: '$price'},  --->  fiel will be created with totalRevenue
 *          averagePrice: {$avg: '$price'}
 *          itemCount: {$sum: 1}  ---> count documents in each grout
 * 
 *      }
 *    }
 * ]) 
 */


db.products.aggregate([
  {
    $group: {
      _id: '$category',   // group data by category

      // display prducts as an array of object with product name and its price
      productsAvailable: {$push: {name:'$title', price: '$price'}},  
      totalRevenue: {$sum: '$price'},
      averagePrice: {$avg: '$price'},
      lowestPrice: {$min: '$price'},
      noOfItems: {$sum: 1}  // count the number of items belongs to specific category
    }
  }
])  