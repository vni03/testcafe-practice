import {Selector} from "testcafe";
import sleep from "../src/func_utils"
import { ClientFunction } from 'testcafe';


fixture `Personal Details Tests`            // Notice the back-tick, NOT a single or double quote
    .page `../src/practice_page.html`     // notice what heppens when the test is run...  Add semicolon if no optional elements

    test('test username', async t => {
        const username = Selector('#username');

        await t     // We wait on a Promise
            .typeText(username, 'species8472')
            .expect(username.value).contains('species8472', 'input contains the test "species8472"')
        await sleep(3000);
    });

    test('test first name and last name', async t => {
        const first_name = Selector('#firstname');
        const last_name = Selector('#lastname');
        const email = Selector('#emailaddr')

        await t
            .typeText(first_name, 'viktoria')
            .typeText(last_name, 'nikolova')
            .click(email)
            .expect(first_name.value).contains('Viktoria', 'input contains upper case')     
            .expect(last_name.value).contains('Nikolova', 'input contains upper case')
        await sleep(3000);
            
    })

    test('Age label is empty', async t => {
        const age = Selector('#age');

        await t
            .expect(age.innerText).eql('', 'field is empty')

        await sleep(3000);

    })

    test('Age is populated with the right age', async t => {
        const date_of_birth = Selector('#birthday')
        const age = Selector('#age');

        await t
            .click(date_of_birth)
            .typeText(date_of_birth, '1993-08-27')
            .expect(age.innerText).contains('27')
        await sleep(3000);
    })


