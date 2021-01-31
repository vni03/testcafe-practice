import {ClientFunction, Selector} from "testcafe";
import sleep from "../src/func_utils"
import {removeTrailingOblique} from "../src/func_utils"

// Utility functions
const getWindowLocation = ClientFunction(() => document.location.href);


fixture `Page Redirection Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test.skip('current location', async t => {
        const location = await getWindowLocation();
        const expectedResult = 'file:///C:/work/git/nodejs-sky/testcafe-quicklab-practice_tests/src/practice_page.html';

        //console.log( location );
        await t     // We wait on a Promise
             .expect(location).eql(expectedResult, 'File paths NOT matched');
        await sleep(3000);
    });

    test('navigate away, then back, then away', async t => {
        // arrange...
        const bbc = Selector("#bbc");
        const qa = Selector("#qa");
        const location = await getWindowLocation();

        let expectedBBCResult = await bbc.getAttribute("href");
        console.log(expectedBBCResult);
        let expectedQAResult = await qa.getAttribute("href");
        console.log(expectedQAResult);

        // act...
        await t     // We wait on a Promise
            .click(bbc);
        
        let currentLocation = removeTrailingOblique(await getWindowLocation());

        await t
            // assert..
            .expect(currentLocation).eql(expectedBBCResult, 'File paths NOT matched')
            .navigateTo(location)
            .click(qa);

        // act...
        currentLocation = removeTrailingOblique(await getWindowLocation());

        await t
            // assert..
            .expect(currentLocation).eql(expectedQAResult, 'File paths NOT matched')    
    });