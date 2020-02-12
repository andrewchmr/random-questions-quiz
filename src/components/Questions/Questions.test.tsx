import React from 'react';

describe('Questions API test', () => {
    it('should load 10 questions', () => {
        return fetch('https://opentdb.com/api.php?amount=10')
            .then(data => data.json())
            .then((myJson) => expect(myJson.results.length).toEqual(10))
    })
});
