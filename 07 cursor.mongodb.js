/**         CURSOR
 * 
 * In MongoDB, a cursor is an object that lets you iterate through the results returned by a query.
 * suppose you query something and the db send you lakhs of docs. This will crash your memory or slow down your app
 * that's why we use cursor, which works as an iterator/pointer.
 * 
 * find() returns CURSOR not the data, the cursor show 20 docs at a time.
 * use cursor.next() ---> returns next document(21st doc) only
 * use cursor.hasNext()  ---> returns boolean if there is more data to show(true)
 * while(cursor.hasNext()) return cursor.next();
 */

use('MongoDYP');

// const cursor = db.products.find({},{title:1, category:1, tags:1, price:1});


// while (cursor.hasNext()) {
//     console.log(cursor.next());
// }


/***
 *  CURSOR METHODS
 * next()
 * hasNext()
 * limit()
 * skip()
 * sort()
*/


/**
 *      This creates a cursor that returns 5 users after skipping the first 10, sorted by age descending.
 * 
 * db.users.find()
    .sort({ age: -1 })
    .skip(10)
    .limit(5);
 */



/**         in modern MongoDB shell syntax:
 * 
    db.users.find({ age: { $gt: 18 } }).forEach(doc => {
        printjson(doc);
    });

*/

/**
 *      PAGIGNATION
 * 
 * if we want to display 3 docs on a single page
 * 
 * >>> db.col.find().skip(0).limit(3);  ---> show first 3 data
 * >>> db.col.find().skip(3).limit(3);  ---> skip first 3 data & show 4-6th docs
 * >>> db.col.find().skip(6).limit(3);  ---> skip first 6 doc & show 7-9th docs
 * >>> db.col.find().skip(9).limit(3);  ---> skip first 9 doc and show 10-12th docs
 * 
 * db.col.find().skip( (page - 1) * lmt ).limit(lmt)  : where lmt = 3 and page = based on user request.
 */
