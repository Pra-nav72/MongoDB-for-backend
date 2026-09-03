show('dbs')
use('MongoDYP')
show('collections') 


/**
 *   MongoDB Aggregation is a framework for processing documents through a sequence of stages, where each stage transforms the data and passes the result to the next stage. It's similar to SQL's GROUP BY, JOIN, and other data-processing operations.

 */

/**
 * 
 * Basic Syntax:
 * 
    db.collection.aggregate([
        { stage1 },
        { stage2 },
        { stage3 }
    ]);
    each stage should starts with $

*/

/**        COMMON AGGREGATE STAGES
 
 *1. $match – Filter documents Works like WHERE in SQL.

    db.orders.aggregate([
    {
        $match: {
        status: "completed"
        }
    }
    ]);



    2. $group – Group documents Works like GROUP BY in SQL.

    Example: Calculate total sales by customer.

    db.orders.aggregate([
    {
        $group: {
        _id: "$customerId",
        totalSales: { $sum: "$amount" },
        totalOrders: { $sum: 1 }
        }
    }
    ]);



    3. $project – Select or transform fields
    db.users.aggregate([
    {
        $project: {
        name: 1,
        email: 1,
        fullName: {
            $concat: ["$firstName", " ", "$lastName"]
        }
        }
    }
    ]);



    4. $sort
    db.orders.aggregate([
    {
        $sort: {
        amount: -1
        }
    }
    ]);

    1 → Ascending
    -1 → Descending


    5. $limit
    db.orders.aggregate([
    {
        $sort: { amount: -1 }
    },
    {
        $limit: 5
    }
    ]);

    Returns the top 5 highest-value orders.



    6. $skip: Useful for pagination.

    db.orders.aggregate([
    { $skip: 10 },
    { $limit: 10 }
    ]);


    7. $unwind: Splits an array into separate documents.

    # Input

    {
    "name": "John",
    "skills": ["Java", "MongoDB", "Node.js"]
    }

    # Aggregation

    db.users.aggregate([
    {
        $unwind: "$skills"
    }
    ]);

    # Output

    { "name": "John", "skills": "Java" }
    { "name": "John", "skills": "MongoDB" }
    { "name": "John", "skills": "Node.js" }

*/


/**     COMMON AGGREGATION OPERATORS
 * Operator	Purpose
    $sum	Sum values
    $avg	Average
    $min	Minimum
    $max	Maximum
    $first	First document in a group
    $last	Last document in a group
    $push	Collect values into an array
    $addToSet	Collect unique values
    $count	Count documents
 */


