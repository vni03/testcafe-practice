import {Selector} from "testcafe";
import sleep from "../src/func_utils"

fixture `Simple test`            // Notice the back-tick, NOT a single or double quote
    .page `../src/simple_page.html`     
    
    test('Test1', async t => {  // The async is important, calls to pages are across a network
        const msg = Selector('#message');
        
        await t     // We wait on a Promise
            .typeText(msg, 'Hello from TestCafe')
            .expect(msg.value).contains('Hello', 'input contains the test "Hello"')

        // comment out the sleep statements to see the code run in realtime
        await sleep(3000);
        await t
            .click("#submit-button")
            .expect(msg.value).contains('', 'input is empty');

        await sleep(3000);
     });