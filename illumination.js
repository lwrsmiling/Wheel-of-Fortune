$(document).ready(function(){
    var lights_number = 24;
    for (i=1;i<=lights_number;i++){
        //outer illumination
        $(".illumination li:nth-child("+i+")").css({
            '-webkit-transform': 'rotate('+15*i+'deg) translateY(-136px)',
            '-moz-transform': 'rotate('+15*i+'deg) translateY(-136px)',
            'transform': 'rotate('+15*i+'deg) translateY(-136px)'        
        }); 
        //inner illumination
        $(".draw_outer li:nth-child("+i+")").css({
            '-webkit-transform': 'rotate('+15*i+'deg) translateY(-40px)',
            '-moz-transform': 'rotate('+15*i+'deg) translateY(-40px)',
            'transform': 'rotate('+15*i+'deg) translateY(-40px)'        
        }); 
    }
    //outer illumination delay odd lights
    $(".illumination li:nth-child(2n+1), .draw_outer li:nth-child(2n+1)").css({
        'animation-delay': '.6s'      
    });
    
    //lottery sector division
    var sectors_number = 6;
    for (j=1;j<=sectors_number;j++){
        $(".lottery-sector li:nth-child("+j+")").css({
            '-webkit-transform': 'rotate('+60*j+'deg) skew(30deg)',
            '-moz-transform': 'rotate('+60*j+'deg) skew(30deg)',
            'transform': 'rotate('+60*j+'deg) skew(30deg)'                 
        });
        $(".lottery-gift li:nth-child("+j+")").css({
            '-webkit-transform': 'rotate('+60*j+'deg) skew(30deg)',
            '-moz-transform': 'rotate('+60*j+'deg) skew(30deg)',
            'transform': 'rotate('+60*j+'deg) skew(30deg)'                 
        });
    }
    
    //lottery sector different colors 
    $(".lottery-sector li:nth-child(2n)").css({
        'background-color': '#FEFEFE'        
    });
    
    $(".lottery-sector li:nth-child(2n+1)").css({
        'background-color': '#FFF0D0'        
    });
    
    $( ".pointer" ).click(function(){
        var random = 1 + Math. floor(Math. random() * 6);
        $(".lottery-sector, .lottery-gift").css({
            'animation': 'spinIt'+random+' 4s forwards ease-in-out'
        });
        
    });
    
    
});