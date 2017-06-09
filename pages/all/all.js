//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    tab: [{
      name: '全部',
      num: 23
    }, {
      name: '待付款',
      num: 2
      }, {
        name: '待发货',
        num: 17
    }, {
      name: '待收货',
      num: 33
      }, {
        name: '待评价',
        num: 11
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
