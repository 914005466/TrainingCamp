// pages/weather/weather.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    city:'',
    code:'',
    temperature:'',
    text:'',
    bot:false
  },
  get(){
    let city =this.data.city
    this.getweather(city)
   
  },
  getweather(city){
    wx.request({
      url: 'https://api.seniverse.com/v3/weather/now.json',
      data: {
        key:'S579w87HNPqf9htEe',
        location:city,
        language:'zh-Hans',
        unit:'c'
      },
      success:(res)=>{
        console.log(res);
      if (res.statusCode != 200) {
          this.getweather('郑州');
          return;
      }
      let fcity=res.data.results[0].location.name;
      let text =res.data.results[0].now.text;
      let temperature =  res.data.results[0].now.temperature;
      let code =  res.data.results[0].now.code;
      this.setData({
        fcity:fcity,
        code:code,
        temperature:temperature,
        text:text,
        bot:true    
      })
      },
      fail:(res)=>{
        console.log(res);
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