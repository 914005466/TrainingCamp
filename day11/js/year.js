let year =prompt("请输入年份")
if (year%4==0 && year%100 !=0 ||year%400 == 0) {
    alert("闰年");
}else {
    alert("平年");
};
