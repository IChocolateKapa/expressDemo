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
