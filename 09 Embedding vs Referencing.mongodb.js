/**
 * Embedding means using one docs inside a docs
    * {
    *   _id: 'a1'
    *  name: 'xyz',
    *  address: {
    *              street:'abc', town: 'pqr', pin: '121'
    *            }
    * }
    
    * here address is embedded in user's doc
    * it used when relation b/w the docs are 1-to-1
    * when the data is tightly related to each other, use embedding
    
    we can acced the embedded docs using .(dot notations)
    e.g. db .students.find({address.streed: 'abc'});
*/ 


/*   
    Referencing means passing the reference of one docs to the other
    {
        _id: 1
        phone: 'lava '
        model: 'xperia 22'
        price: 12999
    }
    {
      _id: 'a1'
      name: 'xyz',
      address: {
                  street:'abc', town: 'pqr', pin: '121'
        }
      orders: [1]
     }

     HERE WE ARE PASSING THE ID OF PRODUCT DOCS INSTEAD OF EMBEDDING COMPLETE DOCS

     referencing uses increase the no. of query operations

     it is usefull for scaling the DB.

     E.G.
        db.users.insertOne({id, name, address, orders: [1(it is id of product 1)]})

    for displaying, we have to unlink it and display
    ** In NODE-js we use 'populate()' for this.
    but here in mongoDB we use $aggregate()

    E.G.
    db.users.aggregrate([
        {
            $lookup:{
                from: <collection> 'orders',
                localField: <field name where foreign key is stored> 'orders',
                
                foreignField: <field name of the other docs which is getting reference d in this field> '_id'
                as: <alias name to represent the field> 'orders with product id'
                

            }
        }
    ])

 */


use('MongoDYP')
show('collections') 

//  Referencing productsUsed to product collectiong using its _id field
db.students.insertOne({
    name: 'xyz',
    city: 'pune',
    skills: ["anything1", "anything2"],
    productsUsed: [4]
})

// show data of products using the _id stored
db.students.aggregate([
    {
        $lookup: {
            from: 'products',
            localField: 'productsUsed',
            foreignField: 'id',
            as: 'order detail'
        }
    }
])

// db.students.find();