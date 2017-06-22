;

(function ($){
    $.fn.rostykPlug = function (elems){

        var obj = this;
        console.log(obj);

        window.onload = function (){

        var $div = $("<div/>",{text : elems.text});

        var style = {
            width : elems.width + "px",
            height : elems.height + "px",
            backgroundColor : elems.backgroundColor,
            borderRadius : elems.borderRadius,
            position : elems.position,
            lineHeight: elems.height + 'px',
            textAlign: "center",
            fontSize : elems.fontSize,
            fontWeight : elems.fontWeight,
            color : elems.textColor

        }
        $div.css(style);


            $div.onmousedown = function (emd){
                document.onmousemove = function (emm){
                    $div.style.top = emm.pageY + "px";
                    $div.style.left = emm.pageX + "px";
                }
            }//down

            $div.onmouseup = function (emu){
                document.onmousemove = null;
            }

        $(obj).append($div);

        }//onload
    }
}(jQuery));


