var order = ['red', 'yellow', 'blue', 'green', 'red']
Page({
  data: {
  
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg', 
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    circular:true,
    current:0,
//猜你喜欢的图片
      src: 'http://p0.meituan.net/deal/1a3010688a9677c708a3436c2d3f7ef1119145.jpg%40180w_180h_1e_1c_1l_80q%7Cwatermark%3D0',
      items:[
        {
          src:"../images/category_top_42.png",
          title:"可口可乐1",
          kc:1000,
          xl:0,
          price:0.01
        },
      {
          src:"../images/category_top_42.png",
          title:"可口可乐2",
          kc:2000,
          xl:0,
          price:0.02
        },
        {
          src:"../images/category_top_42.png",
          title:"可口可乐3",
          kc:300,
          xl:30,
          price:0.3
        },
        {
          src:"../images/category_top_42.png",
          title:"可口可乐4",
          kc:40,
          xl:566,
          price:0.01
        },
      ],
      youhui_lists:[
        {
          // src:"",
          // name:"九牛二牛潮汕牛肉火锅",
          // nowmoney:1,
          // oldmoney:36
        }
      ],
      dz_list:[
        {
          iforder:true,
          src:'../images/huoguo.jpg',
          name:"四川香天下火锅",
          active:"[通河/泗塘] 88元代金券1张",
          money:1,
          oldmoney:88,
          salenum:1134,
          adress:"《生化危机》取景地",
          ad:false
        },
          {
            iforder:true,
          src:'../images/huoguo.jpg',
          name:"四川香天下火锅",
          active:"[通河/泗塘] 88元代金券1张",
          money:1,
          oldmoney:88,
          salenum:1134,
          adress:"《生化危机》取景地",
           ad:false
        },
          {
            iforder:false,
          src:'../images/huoguo.jpg',
          name:"四川香天下火锅",
          active:"[通河/泗塘] 88元代金券1张",
          money:1,
          oldmoney:88,
          salenum:1134,
          adress:"《生化危机》取景地",
           ad:false
        },
        {
          iforder:false,
          line1:"免费领取200元优惠",
          line2:"上大众点评，各种大奖等你来抢！",
          line3:"去领取",
          ad:true
        },
         {
            iforder:false,
          src:'../images/huoguo.jpg',
          name:"四川香天下火锅",
          active:"[通河/泗塘] 88元代金券1张",
          money:1,
          oldmoney:88,
          salenum:1134,
          adress:"《生化危机》取景地",
           ad:false
        },
         {
            iforder:false,
          src:'../images/huoguo.jpg',
          name:"四川香天下火锅",
          active:"[通河/泗塘] 88元代金券1张",
          money:1,
          oldmoney:88,
          salenum:1134,
          adress:"《生化危机》取景地",
           ad:false
        }
      ]
  },
  switch:function(e){
    const length=this.data.objectArray.length;
    for(var i=0;i<length;i++){
      const x=Math.floor(Math.random()*length);
      const y=Math.floor(Math.random()*length);
      const temp=this.data.objectArray[x];
      this.data.objectArray[x]=this.data.objectArray[y]
      this.data.objectArray[y]=temp
    }
  },
  addToFront:function(e){
     const length=this.data.objectArray .length;
     this.data.objectArray=[{id:length,unique:"unique_"+length}].concat(this.data.objectArray);
     this.setData({
       objectArray:this.data.objectArray
     })
  },
addNumberToFront:function(e){
     this.data.numberArray=[this.data.numberArray.length+1].concat(this.data.numberArray);
     this.setData({
       numberArray:this.data.numberArray
     })
}
})