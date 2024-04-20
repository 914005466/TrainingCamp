// pages/logs1/logs1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    but:'开始',
    type:'primary',
    dianm:'点击开始开始点名',
    names:['a','b','c','d'],
    flag:true,
    timer:null
  },
  DianMingQi() {
   
    if (this.data.flag) {
     this.data.timer= setInterval(()=>{
        let index = Math.floor(Math.random()*this.data.names.length)
        console.log(index);
        this.setData({
          dianm:this.data.names[index]
        }) 
      },1000)
      this.setData({
        but:"结束",
        flag:false,
        type:'warn'

      })
    }else{
      clearInterval(this.data.timer)
      this.setData({
        
        but:"开始",
        flag:true,
        type:'primary'
      })
     
    }
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