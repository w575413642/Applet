//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    tab: [{
      name: '手机数码',
      ks:'0'
    }, {
      name: '家用电器',
      ks: '1'
      }, {
        name: '电脑办公',
        ks: '2'
    }, {
      name: '家居家装',
      ks: '3'
      }, {
        name: '服装',
        ks: '4'
    }, {
      name: '童装童鞋',
      ks: '5'
      }, {
        name: '箱包箱帽',
        ks: '6'
    }, {
      name: '运动户外',
      ks: '7'
      }, {
        name: '汽车用品',
        ks: '8'
    }, {
      name: '图书音像',
      ks: '9'
      }, {
        name: '个人化妆',
        ks: '10'
      }],
    label:[{
      img:'http://demoshop.youpzt.com/uploads/product/2017-01-27/588a21675dd1d.jpg',
      text: '123',
      content: [{
        title: '123',
        classify: [{
          arimg:'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
          name: '123'
        }, {
          arimg:'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
          name: '123'
        }, {
          arimg:'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
          name: '123'
        },]
      },
        {
          title: '123',
          classify: [{
            arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
            name: '123'
          }, {
            arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
            name: '123'
            }, {
              arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
              name: '123'
          }, {
            arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
            name: '123'
            }, {
              arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
              name: '123'
            },]
        },
        {
          title: '123',
          classify: [{
            arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
            name: '123'
          }, {
            arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
            name: '123'
          }, {
            arimg: 'http://demoshop.youpzt.com/uploads/product/2017-02-15/58a4562b14e76.jpg',
            name: '123'
          },]
        }]
      },
      ]
  },
  sidebar:function(e){
    this.setData({
      id: e.target.dataset.ks
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
