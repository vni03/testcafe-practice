import {Selector} from "testcafe";

fixture `Getting Stated`            // Notice the back-tick, NOT a single or double quote
    .page `http://google.co.uk`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    // optional elements for all tests...
    .beforeEach( async t => {       // This is optional
        console.log("This runs before any test case and is only run once...")
    })
    .afterEach( async t => {        // This is optional
        console.log("This runs after any test case and is only run once...")
    }); // semicolon to terminate optional elements

    
    test('My first test', async t => {
        console.log("My first test has run...")
    });

    test
    .before( async t => {   // This is optional
        console.log("This runs before the second test case...")
    })
    ('My second test', async t => {
        console.log("My second test has run...")
    })
    .after( async t => {    // This is optional
        console.log("This runs after the second test case...")
    })
