'use strict';

var ActionBar = require('./../../action-bar');

module.exports = ActionBar.extend({

  barRepeater: 'tabProvider in decisionInstanceActions',

  gotoProcessInstanceButton: function() {
    return this.actionButtons().get(0).element(by.css('.btn'));
  },

  gotoProcessInstance: function() {
    return this.gotoProcessInstanceButton().click();
  },

});
