//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    ac: 1,    
    tab: [{
      name: '全部',
      num: 23,
      ks:1,
    }, {
      name: '待付款',
      num: 2,
      ks: 2,
      }, {
        name: '待发货',
        num: 17,
      ks: 3,
    }, {
      name: '待收货',
      num: 33,
      ks: 4,
      }, {
        name: '待评价',
        num: 11,
      ks: 5,
      },]
  },
  changeOrder: function(e){
    // 切换tab
   this.setData({
     ac: e.target.dataset.ks
   })
  //  重新刷新库
  },
  onLoad: function () {
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
