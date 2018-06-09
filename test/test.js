const chai = require('chai');
const expect = chai.expect;

const calc = require('../index');

describe('index', () => {
	describe('Testing add', () => {
		it('Should the sum of a and b', () => {
				const res = calc.add(10, 8);
				expect(res).to.be.equal(18);
		});
	});

	describe('Testing sub', () => {
		it('Should the sub of a by b', () => {
				const res = calc.sub(10, 8);
				expect(res).to.be.equal(2);
		});
	});
});
