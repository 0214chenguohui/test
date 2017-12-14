// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      me:"我的会员中心",
      users:[{
        message:"陈国慧"
        },
        {
          message:"王建"
        },
        {
          message:"冯艳伟"
        },
        {
          message:"冀聪聪"
        },
        {
          message:"米阿鹏"
        },
      {
          message:"李全"
        },
      {
          message:"杨红波"
      }, 
      {
        message:"范钰心"
        }
      ]
  },
  regist:function(event){
    //console.log("注册");
    wx.showToast({
      title: '正在注册会员',
      duration:2000,
      icon:"loading",
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  }
})