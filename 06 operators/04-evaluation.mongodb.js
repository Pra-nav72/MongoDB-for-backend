use('MongoDYP')


// 1. $expr
db.products.find({
    // stock which is > 80
    $expr: {
        $gt:['$stock', 80]
    }
})
// E.G. find data where price after discounts > 100

// 2. $regex
db.products.find({title: {$regex:"Lip", $options: 'i'}}) // title which contains letter: Lip with case insensitive

// 3. $mod: modulo operator
db.products.find({
    //   mod:[divisor, remainder]
    price: {$mod:[10, 2]}
})