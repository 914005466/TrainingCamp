// pages/logs3/logs3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:'primary',
    flag:true,
    timer:null,
    foods:['刀削面','大盘鸡','板面','自选餐','卤面','大米套餐'],
    food:'今天吃什么',
    eat:'吃什么',
    newfood:'',
    xianshi:true
  },
  submit(){
    if(this.data.flag){
     this.data.timer = setInterval(()=>{
      //  获取一个随机数并赋值给 index
       let index = Math.floor(Math.random()*this.data.foods.length)
      //  更改food的值
      this.setData({
        food:this.data.foods[index]
      })
      },100)
      this.setData({
       eat:'就它了',
       type:'warn',
       flag:!this.data.flag
      })
    }else{
      clearInterval(this.data.timer)
      this.setData({
        eat:'吃什么',
        flag:!this.data.flag,
        type:'primary',
       })
    }

  },
  addNewFood(e){
    this.setData({
      newfood:e.detail.value
    })
  },
  new(){
    let listfood = this.data.foods;
    let zanshifood = this.data.newfood.trim();
    if (this.data.xianshi) {
      this.setData({
        xianshi:false,
      })
      return;
    }
    if( zanshifood == 0) {
      wx.showToast({
        title: '食物不能为空',
        icon: 'error',
        duration: 2000
      })
      return;
    }
    listfood.push(zanshifood);
    this.setData({
     newfood:listfood
   })
   wx.showToast({
    title: '添加成功',
    icon: 'success',
    duration: 2000
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