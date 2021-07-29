# My learning

#### Red, Green, Refactor

End to end testing
unit testing
intergration testing

you can implement tests by creating a file that has the same name as the file you want to test with .test.js appended on the end, jest automatically looks for these files.

The test method can be used off the bat with no imports.
With test the first arguement is the name of the test
the second arguement is a callback fucntion with the expect method called within to check current conditions against a predefined expectation value with the `.toBe()` or `.toEqual()` methods on the end of the expect method.

and that should show the tests being passed or failed in the console when the app is run.

within the package.json add to the scripts obj:
`"test" : "jest --watchall --verbose --coverage"`

within one of the tutorials i done we also installed: 
npm install @types.js/jest 
and created a jsconfig.json file and inserted the code:
`
{
    "typeAcquisition": {
        "include": [
            "jest"
        ]
    }
}
`
To see test code: go to dir labs/tdd_and_unit_testing/vite-project and run npm test to see test cases and go into otherJestTest dir to find simple examples.


