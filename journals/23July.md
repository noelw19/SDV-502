# Day 2 
#### Types of testing

Software sec and development both have software testing.

mocha, jasmine, jest - unit test frameworks

testing - is the process of checking the functionality, UI/UX and design.

manual software testing and automated testing

### Mantra of test driven development
"Red, green, refactor"

1. start by writing a test that fails
2. write production code thats green
3. eliminate redundancy to create clean code.

manual testing includes:
1. checklist
2. doesnt need automation testing
3. time consuming

automated testing includes:
1. 

5 levels of testing
1. unit test
2. integration test
3. system test
4. enterprise test
5. user acceptance test

Quick testing professional - QTP
Unified Function Testing - UFT

Unit testing focuses on testing individual units of an application, a unit being the smallest testable part of any software testing to see if they are fit for purpose.

#### Regression testing
repeated testing of an already tested program, essentially is a test after the initial tests to make sure that the modification of the program through the previous test did not infact break the code and render the program useless till a fix is found.

#### Intergration testing
grouping all of the tests and runninf them all at once. checks all tests with the entire system instead of individual unit tests running at different points of the application. Intergration testing is a bundle of unit tests.

4 approaches to intergration testing:
1. Big bang approach - all the testing module cases are tested against the finished application.
2. Top-down approach - testing happens from top down checking each layer individually.
3. Bottom-up approach - test as a whole, and then indiducally test each layer.
4. Hybrid approach - top to bottom/bottom to top.

#### System Testing
complete intergrated stage of testing your software, testing evertything, business model specs, functionality testing etc. Testing when the software is ready to be handed to the end user.

What is the process?
make sure it is fully intergrated before testing.
Optimise every stage of the system, taking all inputs your feeding into the system
Make sure you have a good, clear vision of the expected output.
test to mitigate future bugs to allow continual development instead of bug fixing.

Students have free pro access to travis CI on github student pack.
