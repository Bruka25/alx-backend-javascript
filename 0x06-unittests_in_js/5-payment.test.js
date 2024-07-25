const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPi = require('./5-payment');

describe('sendPaymentRequestToApi', function() {
  describe('#pys Utils.calculateNumber()', function() {
    let spy;
    beforeEach(function() {
      spy = sinon.spy(console, 'log');
    });
    afterEach(function() {
      spy.restore();
    });

    it('should be return 120 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(100, 20);
      expect(spy.calledWith('The total is: 120')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });

    it('should be return 20 when called by sendPaymentRequestToAPI', function() {
      sendPaymentRequestToAPi(10, 10);
      expect(spy.calledWith('The total is: 20')).to.equal(true);
      expect(spy.calledOnce).to.equal(true);
    });
  });
});
