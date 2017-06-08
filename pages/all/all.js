//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    tab: [{
      name: '全部',
      num: 12
    }, {
      name: '全部',
      num: 12
      }, {
        name: '全部',
        num: 12
    }, {
      name: '全部',
      num: 12
      }, {
        name: '全部',
        num: 12
      },]
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
