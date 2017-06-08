//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    // imgwidth:'',
    // imgheight: 0, 
    userInfo: {},
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    shop_list: [
      { msg: ' · 批发产品已上线' },
      { msg: ' · 产品库功能已更新' }
    ],
    twoList: [{
      id: 1,
      src:'http://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg',
      name: '华为',
      count: 1,
      twodata: [{
        'id': 11,
        'name': '华为手机华为手机华为手机华为手机华为手机华为手机'
      }],
      threedata:[{
          'id': 12,
          'name': '￥123'
        }]
    }, {
      id: 2,
      src: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
      name: '卧室',
      count: 6,
      twodata: [{
        'id': 13,
        'name': '卧室吊灯卧室吊灯卧室吊灯卧室吊灯卧室吊灯'
      }],
      threedata: [{
        'id': 12,
        'name': '￥123'
      }]
    }, {
      id: 3,
      src: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b5a2b26f7b3.jpg',
      name: '单肩包',
      count: 12,
      twodata: [{
        'id': 15,
        'name': '女款单肩背包女款单肩背包女款单肩背包女款单肩背包'
      }],
      threedata: [{
        'id': 12,
        'name': '￥123'
      }]
    }],
    botList: [{
      id:12,
      src:'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
      name:'test',
      twodata:[{
        name: '妹子妹子妹子妹子妹子妹子妹子'
      }],
      threedata:[{
        money:'$123123'
      }]
    }, {
      id: 12,
      src: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
      name: 'test',
      twodata: [{
        name: '妹子妹子妹子妹子妹子妹子妹子'
      }],
      threedata: [{
        money: '$123123'
      }]
      }, {
        id: 12,
        src: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
        name: 'test',
        twodata: [{
          name: '妹子妹子妹子妹子妹子妹子妹子'
        }],
        threedata: [{
          money: '$123123'
        }]
    }, {
      id: 12,
      src: 'http://demoshop.youpzt.com/uploads/product/2017-03-01/58b6a02c36f0b.jpg',
      name: 'test',
      twodata: [{
        name: '妹子妹子妹子妹子妹子妹子妹子'
      }],
      threedata: [{
        money: '$123123'
      }]
    }]
  },
  onswitch: function (e) {

  },
  // imageLoad: function (e) {
  //   var _this = this;
  //   var $width = e.detail.width,    //获取图片真实宽度  
  //     $height = e.detail.height,
  //     ratio = $width / $height;   //图片的真实宽高比例  
  //     var viewWidth,           //设置图片显示宽度，  
  //       viewHeight = $width / ratio;    //计算的高度值     
  //   this.setData({
  //     imgwidth: '45px',
  //     imgheight: '25px'
  //   })
  // },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
