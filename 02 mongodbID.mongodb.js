ObjectId()
// ObjectId('6a8d612ea7638cd114cXXXXX') : 24 characters

// ## Characteristics

/**
 * unique id for every docs
 * type of _id is ObjectId by default
 * created automaticlly
 * works as primary key
 * fast search
 * document identification
 * Immutable (usually)
 */

/**
 * ObjectId is a 12-byte binary value.
 * it is displayed as hexadecimal string(hence, 24chars)
 * 
 */

/**
 **************  _id BREAKDOWN *************
 1. Timestamp (first 4 bytes, 8chars)

 2. Machine Identifier (next 3 bytes, 6chars): which server created

 3. Process ID (next 2 bytes, 4chars): which process generating the document

 4. Counter (remaining 3 bytes, 6chars): incrementing counter, 
 makes documents unique when many documents inserted/created at once.
 */