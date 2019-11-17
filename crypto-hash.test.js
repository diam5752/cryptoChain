const cryptoHash = require('./crypto-hash');

describe('cryptoHash()', () => {

    it('generates a SHA-256 hashed output', () => {
        expect(cryptoHash('318892'))
            .toEqual("a387f76a1867861964fbcb24f069a4a3f76f39bbca9b05aa18f3749934837b46");
    });

    it('produces the same hash with the same input arguments in any order' , () => {
        expect(cryptoHash('one','two','three'))
            .toEqual(cryptoHash('three','one','two'))
    });



});