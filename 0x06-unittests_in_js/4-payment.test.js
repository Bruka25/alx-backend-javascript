const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToAPi = require('./4-payment');

describe('sendPaymentRequestToApi', function() {
  describe('#stubbed Utils.calculateNumber()', function() {
    it('should be return 10 when called by sendPaymentRequestToAPI', function() {
      const stub = sinon.stub(Utils, 'calculateNumber');
      const spy = sinon.spy(console, 'log');
      stub.withArgs('SUM', 100, 20).returns(10);
      sendPaymentRequestToAPi(100, 20);
      expect(stub.calledOnce).to.equal(true);
      expect(stub.calledWith('SUM', 100, 20)).to.equal(true);
      expect(spy.calledWith('The total is: 10')).to.equal(true);
      stub.restore();
      spy.restore();
    });
  });
});
