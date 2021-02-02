import {ClientFunction, Selector} from "testcafe";
import sleep from "../src/func_utils"
import {removeTrailingOblique} from "../src/func_utils"

// Utility functions
const getWindowLocation = ClientFunction(() => document.location.href);


fixture `Page Redirection Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test.skip('current location', async t => {
        const location = await getWindowLocation();
        const expectedResult = 'file:///C:/work/testcafe-quicklab-practice/src/practice_page.html';
        
        // add your assert here...
        // assert that the current location mataches the expectedResult

        await t
            .expect(location).eql(expectedResult);

        console.log( location );

        // the sleep isn't needed but useful for pausing the browser, value is in milliseconds
        await sleep(3000);
    });

    test('navigate away, then back, then away', async t => {
        // arrange...
        // fetch the tags for BBC and QA, store them in the two variable bbc and qa respectively

        const expectedResult = 'file:///C:/work/git/nodejs-sky/testcafe-quicklab-practice_tests/src/practice_page.html';
        const bbc = Selector('#bbc')
        const qa = Selector('#qa')

        // get your current location, store it in a location variable - this is home location
        const home_location = removeTrailingOblique( await getWindowLocation());

        // set up your expected values for the BBC and QA tags.  
        const bbc_url = await bbc.getAttribute('href');
        const qa_url = await qa.getAttribute('href');
        // Use the variables from above and call await bbc.getAttribute("href")
        // Use console.log() or the debugger to see what above code does
        console.log( home_location );

        // act...
        // navigate to the bbc by clicking on the page
        // get your current location

        await t
            .click(bbc)
            .setNativeDialogHandler(() => true );
   //         .click(".sign_in-exit");
        let current_location = removeTrailingOblique(await getWindowLocation());


        // assert...
        // aasert that the current location matches the expected location for the bbc
        await t
            .expect(current_location).eql(bbc_url)
            .navigateTo(home_location);
            
        // arrange...
        // navigate back to the home location using t.navigateTo()

        // act...
        // navigate to QA by clicking on the page
        // get your current location
        await t.click(qa);
        current_location = removeTrailingOblique(await getWindowLocation());


        // assert...
        // aasert that the current location matches the expected location for the QA
        await t.expect(current_location).eql(qa_url);
    });
