//logs.js

Page({
  data: {
    src: 'http://demoshop.youpzt.com/uploads/avatar/1/5905b14b0d100.jpg',
    name: '创始人',
    level: '最高权限',
    state: [{
      data: '0.00',
      name: [{
        title: '账户余额'
      }]
    }, {
      data: '0.00',
      name: [{
        title: '优惠券'
      }]
    }, {
      data: '0.00',
      name: [{
        title: '我的积分'
      }]
    }],
    order: [{
      font: 'icon iconfont icon-daifukuan',
      num: [{
        title: '12'
      }],
      name: [{
        li: '待付款'
      }]
    }, {
      font: 'icon iconfont icon-icon077',
      num: [{
        title: '6'
      }],
      name: [{
        li: '待发货'
      }]
    }, {
      font: 'icon iconfont icon-daifahuo1',
      num: [{
        title: '3'
      }],
      name: [{
        li: '待收货'
      }]
    }, {
      font: 'icon iconfont icon-daipingjia1',
      num: [{
        title: '12'
      }],
      name: [{
        li: '待评价'
      }]
    }, {
        font: 'icon iconfont icon-tuihuanhuo1',
      num: [{
        title: '0'
      }],
      name: [{
        li: '退换货'
      }]
    }]
  },
  href:function(){
    wx.navigateTo({
      url: '../all/all'
    })
  }
})
