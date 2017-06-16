//logs.js
var util = require('../../utils/util.js');
var app = getApp();
var getcode = require('../../utils/getCode.js');
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
      }],
      shop:[{
        num:'13131313131131313131',
        status:'买家已发货',
        shop_n:[{ 
            img: 'http://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg',
            shopName: '华为（HUAWEI）M2 10.0平板电脑 Wifi月光银',
            shopSmall: '尺寸：7存及以下 内存：32G 颜色：黑色',
            money: '2333.00',
            numShop: '12'
        },
        {
            img: 'http://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg',
            shopName: '华为（HUAWEI）M2 10.0平板电脑 Wifi月光银',
            shopSmall: '尺寸：7存及以下 内存：32G 颜色：黑色',
            money: '2333.00',
            numShop: '12'
          }],
        all_order:'2',
        money:'32.00'
      },
        {
          num: '13131313131131313131',
          status: '买家已发货',
          shop_n: [{
            img: 'http://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg',
            shopName: '华为（HUAWEI）M2 10.0平板电脑 Wifi月光银',
            shopSmall: '尺寸：7存及以下 内存：32G 颜色：黑色',
            money: '2333.00',
            numShop: '12'
          },
          {
            img: 'http://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg',
            shopName: '华为（HUAWEI）M2 10.0平板电脑 Wifi月光银',
            shopSmall: '尺寸：7存及以下 内存：32G 颜色：黑色',
            money: '2333.00',
            numShop: '12'
          }],
          all_order: '2',
          money: '32.00'
        }]
  },
  getdata: function () {
    var myDate = new Date();
    var cc = myDate.toLocaleDateString().split('/')
    if (cc[0].length == 1){
        cc[0] = '0'+cc[0]
    }
    console.log()
    console.log(app.port.home + cc[2] + '-' + cc[0] + '-' + cc[1] + '_' + myDate.toLocaleTimeString().substr(0,2) + '97fd5908881e5923486861adb639fc223115')
    console.log(this.coding(app.port.home + cc[2] + '-' + cc[0] + '-' + cc[1] + '_' + myDate.toLocaleTimeString().substr(0, 2) + '97fd5908881e5923486861adb639fc223115'))
    wx.request({
      url: app.port.home,
      data:{
        sign: this.coding(app.port.home + cc[2] + '-' + cc[0] + '-' + cc[1] + '_' + myDate.toLocaleTimeString().substr(0, 2) + '97fd5908881e5923486861adb639fc223115')
      },
      header:{
        'content-type':'application/json'
      },
      success: function (information){
        console.log(information)
      }
    })
  },
  changeOrder: function(e){
    // 切换tab
   this.setData({
     ac: e.target.dataset.ks
   })
  //  重新刷新库
  },
  coding: function (c) {
    return getcode.getCode(c);
  },
  onLoad: function () {
    // console.log(app.a)
    this.getdata();
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
