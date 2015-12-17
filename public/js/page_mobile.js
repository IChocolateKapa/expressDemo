/**
 * Created by Echo on 2015/12/17.
 */

var timeOutEvent=0;
$(function(){
    $(".imgListItem").on({
        touchstart: function(e){
            timeOutEvent = setTimeout("longPress()", 500);
            e.preventDefault();
        },
        touchmove: function(){
            clearTimeout(timeOutEvent);
            timeOutEvent = 0;
        },
        touchend: function(){
            clearTimeout(timeOutEvent);
            if(timeOutEvent!=0){
                eModal.alert("你这是点击，不是长按");
            }
            return false;
        }
    })
});

function longPress () {
    timeOutEvent = 0;
    eModal.alert("长按事件触发发");
}