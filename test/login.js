import {locator} from './../data/locator';
import * as assert from 'assert';

describe('Page login', function () {
    it('sing in', function(){
        browser.url('http://localhost:3000/user/login'); //open baseUrl + string passed in .url() function
        browser.setValue(locator.email, '1'.repeat(data.minLength));
        let input = browser.getValue(locator.email);
        assert.equal(input.length, data.minLength);
    })
});


