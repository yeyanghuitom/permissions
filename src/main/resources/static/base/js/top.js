/**
 * Created by Bear on 2018/6/9.
 */

$(function loadButton(){
    window._toTop = window._toBottom = true;
    var button = document.createElement("p");
    var buttonBottom = document.createElement("p");
    button.id = "toTop";
    buttonBottom.id = "toBottom";
    button.style = 'position:fixed;right:10px;bottom:120px;';
    buttonBottom.style = 'position:fixed;right:10px;bottom:80px;';
    button.innerHTML = '<i class="fa fa-caret-up"></i>';
    buttonBottom.innerHTML = '<i class="fa fa-caret-down"></i>';
    button.setAttribute("class","btn btn-circle btn-success");
    buttonBottom.setAttribute("class","btn btn-circle btn-success");
    button.onclick = function (){
        if(window.pageYOffset == 0){

        }else if(window._toTop){

            window._toTop = false;
            //todo 置顶
            $(document.documentElement).animate({ scrollTop: 0 },600,"",function(){
                window._toTop = true;
            });
        }
    };
    buttonBottom.onclick = function (){
        if( (window.innerHeight+window.pageYOffset) >= document.body.scrollHeight){}else if(window._toBottom){
            window._toBottom = false;
            //todo 置底
            $('html,body').animate({scrollTop:document.body.scrollHeight + 'px'}, 600,"",function(){
                window._toBottom = true;
            });
        }
    };
    (document.body || document.getElementsByTagName("body")[0]).appendChild(button);
    (document.body || document.getElementsByTagName("body")[0]).appendChild(buttonBottom);
    console.log(" button load success.");
});