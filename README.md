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
<ul>
    <li> Keys </li>
    <ul>
        <li> can be none unique </li>
        <li> can be empty </li>
        <li> can contain any character </li>
        <li> a MAX key length is defined in ./src/lib/constants.js ( defined as KEY_MAX_LENGTH ) </li>
    </ul>
    <li> Value </li>
    <ul>
        <li> can be empty </li>
        <li> can contain any character </li>
        <li> a MAX value length is defined in ./src/lib/constants.js ( defined as VALUE_MAX_LENGTH ) </li>
    </ul>
    <li> Page refresh </li>
    <ul>
        <li> sets state back at initial state which is to contain "One `KeyValue` component within it to begin" </li>
        <li> does not persist  </li>
    </ul>
    <li> Submit </li>
    <ul>
        <li> outputs empty key value pairs </li>
        <li> due to above assumption none unique keys I did not create an object of key value objects </li>
        <ul>
            <li>  example code is provided in ParentComponent.js but would need to create alerts on duplicate keys and empty keys </li>
            <li>  Please let me know if you would like me to add this logic </li>
        </ul>
    </ul>
    <li> MAX_NUM_KEYVALUES  ( default 1000 ) </li>
    <ul>
        <li> is the default number of allowed key value pairs that can be created </li>
        <li> an Alert Modal was added when the MAX is reached </li>
    </ul>
</ul>


thank you for this challenge I enjoyed it...
Please let me know if you have any questions.

Todd
taw1313@gmail.com