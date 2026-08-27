use('MongoDYP')

// 1. $all: fetch docs which contains every element of the array given
db.products.find({tags: {$all:['beauty']}})

// 2. $elemMatch: array containing objects(elements based)
db.products.find({
    // find those docs where the reviews have rating:5 AND comment: 'Great product!'
    reviews: {$elemMatch: {
        rating: 5,
      comment: 'Great product!',
    }}
})


// db.products.find()


// 3. $size: docs with the size given
// db.products.find({
//     tags: {$size: 2}
// })