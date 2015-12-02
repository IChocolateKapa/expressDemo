/**
 * Created by Echo on 2015/11/27.
 */

$(function(){
    var name = data;
    console.log("in index.js file: ", name);
    $.ajax({
        url: "/login",
        type: "post",
        data: {
            username: "Echo",
            password: "123457kshe"
        },
        dataType: "json",
        success: function (data) {
            console.log("data is : ", data.status);
            window.open("/quit?username=Echo123&password=123456");//成功！
        }
    })


});

/**
 * 获取分母 数量级 基数
 * dataAr: [1234, 45676, 4326378217895734,5667]形式的数字数组
 * */
function getBaseNum(dataAr) {
    var max = dataAr[0];
    for (var i = 1; i < dataAr.length; i++) {
        if (max < dataAr[i]) {
            max = dataAr[i];
        }
    }

    var maxStr = max + "",
        baseNum = Math.pow(10, (maxStr.length - 2));
    return baseNum;
}