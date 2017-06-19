//logs.js
var util = require('../../utils/util.js');
// var data = { counter: 0 };
Page({
  data: {
    array: ['1', '2', '3', '4'],
    indexs:0,
    order:[{
      no_expired: [{
        img: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
        title: '33333333333333333333333white-space: pre-wrap;',
        small: '444444444444444',
        money: '555555'
      }, {
        img: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
        title: '33333333333333333333333white-space: pre-wrap;',
        small: '444444444444444',
        money: '555555'
        }, {
          img: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
          title: '33333333333333333333333white-space: pre-wrap;',
          small: '444444444444444',
          money: '555555'
      }, {
        img: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
        title: '33333333333333333333333white-space: pre-wrap;',
        small: '444444444444444',
        money: '555555'
      },],
      expired:{}
    }]
  },
  bindPickerChange:function(e){
    console.log(e.detail.value)
    this.setData({
      indexs: e.detail.value
    })
  },
  onLoad: function () {
    // this.setData({
    //   logs: (wx.getStorageSync('logs') || []).map(function (log) {
    //     return util.formatTime(new Date(log))
    //   })
    // })
  }
})
