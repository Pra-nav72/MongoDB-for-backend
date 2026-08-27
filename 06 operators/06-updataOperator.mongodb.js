/**
 * $set: update  field value
 * $unset: remove field
 * $inc: increase/decrease numeric value
 * $push: push value to the array
 * $mul: multiply the number
 * $rename: change field name
 * $min: update the field with minimum value
 * $max: update the field with maximum value
 * $currentDate: set field to current date
 */

/**
 *      ARRAY UPDATE Operator
 *  $push: add a value to the array
 *  $pull: remove the matching value from the array
 *  $pullAll: remove multiple specified elements
 *  $pop: removes first/last element
 *  $addToSet: do not allow duplicate values
 * 
 *  $each: add multiple elements with $push / $addToSet
 *  $position: specify insertion position with $push
 *  $slice: limit array size with push
 */

use('MongoDYP')

// $inc
db.products.updateMany(
    // decrease the price by 200, of a product which has price 499.99
    {price: 499.99},{$inc: {price: -200}}
)


// $addToSet: it won't be added if already exist
db.products.updateMany(
    {tags: {$all: ['beauty', 'lipstick']}}, {$addToSet: {tags: 'shristika'}}
)

// $pull: remove the shristika from the tags array
db.products.updateMany({
    tags: {$all: ['beauty', 'lipstick', 'shristika']}
},{$pull: {tags: 'shristika'}})

// $min: {$min: {stock: 100}}
// $max: {$max: {stock: 100}}
/**
 * suppose stock value of docs are: 129, 87, 56, 333
 *      then stock>100 will be 100: 100, 87, 56, 100
 * 
 * $min changes the upper value to given limit
 * 
 * similary for $max: if value are less than 100 then updat them with 100 ($max:{stock: 100})
 * docs stock: 129, 87, 56, 333
 * updated   : 129, 100, 100, 333
 * 
 * $max changes the lower value to given limit
 */
db.products.find()