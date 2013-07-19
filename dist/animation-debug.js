define("emo/animation/1.0.0/animation-debug", [ "arale/class/1.1.0/class-debug-debug" ], function(require, exports, module) {
    var Class = require("arale/class/1.1.0/class-debug-debug");
    var Animation = Class.create({
        test: function() {
            console.log(1);
        },
        initialize: function() {
            // data bind on this animate
            this.data = null;
            // id, modify this animation
            this.id = null;
            // animateId, modify which animate this instance belong to
            this.animateId = null;
            // actionId, modify which action under the animate
            this.actionId = null;
            // frames, all the frames contained in this animate
            this.frames = null;
        },
        // bind animate data
        bindData: function(data) {
            if (!data) {
                throw new Error("null parameter");
            }
            if (data.animateId && data.actionId) {
                var animateId = data.animateId;
                var actionId = data.actionId;
                this.setId(animateId, actionId);
            }
            if (data.frames) {
                var frames = data.frames;
                if (isArray(frames)) {
                    this.setFrames(frames);
                } else {
                    throw new Error("incorrect frames data, should be Array");
                }
            }
        },
        // setId
        setId: function(animateId, actionId) {
            this.id = animateId + "-" + actionId;
        },
        // getId
        getId: function() {
            return this.id;
        },
        // setFrames
        setFrames: function(frames) {
            this.frames = frames;
            this.setFramesBelong();
        },
        // getFrames
        getFrames: function() {
            return this.frames;
        },
        // set each frame belong to
        setFramesBelong: function() {
            if (!this.frames) {
                throw new Error("This animation has no frames");
            } else {
                var frames = this.frames;
                for (var i = 0, len = frames.length; i < len; i++) {
                    if (frames[i].setBelonging) {
                        frames[i].setBelonging(this.getId());
                    }
                }
            }
        }
    });
    module.exports = Animation;
    var toString = Object.prototype.toString;
    var isArray = Array.isArray || function(val) {
        return toString.call(val) === "[object Array]";
    };
});
