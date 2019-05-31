# Dragonchain Interview canvas

To run locally:
-clone the respository.
-run `npm install`
-run `npm start`
The webpack dev server will serve the site on `localhost:3000`


To run the unit test suite (using Jest): for docs see: https://facebook.github.io/jest/
-in your console run `npm test`;
The full report will display in your console.

# Todd Wilson's assumptions
-Keys
    + can be none unique
    + can be empty
    + can contain any character
    + a MAX key length is defined in ./src/lib/constants.js ( defined as KEY_MAX_LENGTH )

-Value
    + can be empty
    + can contain any character
    + a MAX value length is defined in ./src/lib/constants.js ( defined as VALUE_MAX_LENGTH )

-Page refresh
    + sets state back at initial state which is to contain "One `KeyValue` component within it to begin"
    + does not persist 

-Submit
    + outputs empty key value pairs
    + due to above assumption none unique keys I did not create an object of key value objects
        - example code is provided in ParentComponent.js but would need to create alerts on duplicate keys and empty keys
        - Please let me know if you would like me to add this logic

-MAX_NUM_KEYVALUES  ( default 1000 )
    + is the default number of allowed key value pairs that can be created
    + an Alert Modal was added when the MAX is reached


thank you for this challenge I enjoyed it...
Please let me know if you have any questions.

Todd
taw1313@gmail.com