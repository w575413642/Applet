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
