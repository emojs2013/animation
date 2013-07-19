define(function(require) {

  var Animation = require('../src/animation')
  var expect = require('expect')

  describe('Animation', function () {

    it('instantiation', function () {
      var animation = new Animation()

      expect(animation.constructor).to.equal(Animation)
    });

    it('Animation.test()', function () {
      var animation = new Animation()
      animation.test()
      expect(animation.test).to.be.ok();
    });

    it('Animation.bindData()', function () {
      var Frame = require('frame');
      var frame = new Frame();

      var animation = new Animation()
      animation.bindData({
        animateId: '12121',
        actionId: '123',
        frames: [frame]
      })
      animation._getId();
      expect(animation.bindData).to.be.ok();
      expect(animation._setId).to.be.ok();
      expect(animation._getId).to.be.ok();
      expect(animation._setFrames).to.be.ok();
    });

  });

});
