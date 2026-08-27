//  DO THIS IN MONGO SHELL OR COMMAND PROMPT

/**
 * show dbs
 * 
 * use newDB ---> create database newDB
 * [NOTE]:: mongoDB is case sensitive, BUT not for DB name (test/Test is same), may have same collection name with different cases.
 */

/**         MAIN
 * google/download: MongoDB Command Line Database Tools Download & configure it(add to PATH variable)

  *****   import file to DB   *******
 
 * Navigate to the folder where the json file(MongoDB documents) located
 * open command prompt to the same path

 ### data: {slfj}{lsjdf}{sldfj}{sldfj}
 * >>> mongoimport --db <database_name> --collection <collection_name> --file <filename>
 * 
 ### data: [ {slkdfj},{sldjfsl}, {lsdjkf} ] (array of objects)
 * >>> mongoimport --db <database_name> --collection <collection_name> --file <filename> --jsonArray


  *****   export DB file   *******
 
 * Navigate to the folder where you want json file(MongoDB documents) to be exported
 * open command prompt to the same path

 ### data: {slfj}{lsjdf}{sldfj}{sldfj}
 * >>> mongoexport --db <database_name> --collection <collection_name> --out <filename>
 * 
 ### data: [ {slkdfj},{sldjfsl}, {lsdjkf} ] (array of objects)
 * >>> mongoexport --db <database_name> --collection <collection_name> --file <filename> --jsonArray
 */