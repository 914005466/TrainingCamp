// pages/text/text.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Joke:''
  },
  newJoke(){
    wx.request({
      url: 'https://api.vvhan.com/api/ian/rand?type=json',
      method:'GET',
      success:(res)=>{
        console.log('成功了');
        console.log(res.data.data.content);
        this.setData({
          Joke:res.data.data.content
        })
      },
      fail:(res)=>{
        console.log('失败了');
      }
     

      
    })
  },
  newtext(){
    wx.request({
      url: 'https://api.vvhan.com/api/text/sexy?type=json',
      method:'GET',
      success:(res)=>{
        console.log('成功了');
        console.log(res.data.data.content);
        this.setData({
          newt:res.data.data.content
        })
      },
      fail:(res)=>{
        console.log('失败了');
      }
     

      
    })

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})