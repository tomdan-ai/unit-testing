const reversedString = require('./task2')

describe(reversedString, () => {
    it('Rewrite string backwards', () => {
        const string = 'Striker'
        expect(reversedString(string)).toEqual('rekirtS');
    })
})