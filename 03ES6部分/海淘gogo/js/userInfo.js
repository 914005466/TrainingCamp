function randomName() {
    const names = ['杨光远','杨洋',"李云鹏","江鑫鑫","杨楠","卢瑶","陈鸿颖","朱亭霏","周娅楠","刘鸿飞","郜超凡","史文壮","郭喆祺","李子默","鲁帅杰","谷青岭","张祥悦","张草原","王同盛","王浩宇","丁俣昊",'吴云鹏','王崇'];
    return names[Math.floor(Math.random() * names.length)];
}

function randomType() {
    return Math.floor(Math.random() * 5) + 1;
}

function randomPhoneNumber() {
    const prefix = ['139', '138', '137', '136', '135', '134', '159', '158', '157', '150', '151', '152'];
    const suffix = Math.floor(Math.random() * 10000000);
    return `${prefix[Math.floor(Math.random() * prefix.length)]}${suffix.toString().padStart(8, '0')}`;
}

function randomAddress() {
    const provinces = ['北京市', '上海市', '广东省', '江苏省', '浙江省', '四川省', '湖北省', '河南省', '山东省', '湖南省'];
    const districts = ['朝阳区', '浦东新区', '天河区', '江宁区', '西湖区', '武侯区', '洪山区', '金水区', '历下区', '雨花区'];
    const streets = ['科技路', '人民路', '中山路', '解放路', '建设路', '和平路', '文化路', '长江路', '黄河路', '珠江路'];
    const numbers = Array.from({ length: 10 }, () => Math.floor(Math.random() * 100) + 1).map(num => num.toString().padStart(3, '0'));
    return `${provinces[Math.floor(Math.random() * provinces.length)]}${districts[Math.floor(Math.random() * districts.length)]}${streets[Math.floor(Math.random() * streets.length)]}${numbers[Math.floor(Math.random() * numbers.length)]}`;
}
function imgs(){
    let imgArry = [];
    for(let i=0;i<5;i++){
        imgArry.push(`../image/1-${i+1}.png`);
    }
    return imgArry;
   

}



const dataArray = [];
for (let i = 0; i < 80; i++) {
    let aa=randomType();
    dataArray.push({
        name: randomName(),
        type: aa,
        //绑定图片和type的关系，让type对应图片
        url: imgs()[aa-1],

        tel: randomPhoneNumber(),
        address: randomAddress()
    });
    // console.log(dataArray[i].type);
}



