//banner轮播开始
$(function(){
	
	var transitionTime = 600;
	var item=$('.banner-inner .item');
	var flag=true;
	var dian=$('.btn li');
	var move=function(n,dir){
		flag=false;
		var active=$('.item.active');
		var op=(dir==="left")?"right":"left";
		active
     	    .removeClass('animate')
		    .addClass(dir)
		    .delay(800)
		    .queue(function(){
		    	flag=true;
		    	$(this).removeClass(dir)
		    	       .removeClass('active')
		    	       .dequeue();     
		    })
			//下一张动画
	  $(n).addClass(op);
	  //reflow
      $(n).get(0).offsetWidth;
      $(n).removeClass(op)
        .addClass('active')
        .delay(800)
        .queue(function(){
        	$(this).addClass('animate').dequeue()
        });
	 }
	
	
     var t=setInterval(function(){
     	$('.banner .zuo').trigger('click')
     },2000)
     
     
     $('.banner .zuo').on('click',function(){
     	   var active=$('.banner-inner .active');
     	   var now=active.next();
     	   if(flag){
     	   	if(now.length){
     	   		now=active.next();
     	   	}else{
     	   		now=item.eq(0);
     	   	}
     	   	move(now,'left');
     	   	flag=false;
     	   	dian.removeClass('active');
     	   	var xiaobiao=now.index();
     	   	dian.eq(xiaobiao).addClass('active');
     	  
          }else{
          	return;
          }
})
       $('.banner .you').on('click',function(){
     	   var active=$('.banner-inner .active');
     	   var now=active.prev();
     	   if(flag){
     	   	if(now.length){
     	   		now=active.prev();
     	   	}else{
     	   		now=item.eq(-1);
     	   	}
     	   	move(now,'right');
     	   	flag=false;
     	   	dian.removeClass('active');
     	   	var xiaobiao=now.index();
     	   	dian.eq(xiaobiao).addClass('active');
          }else{
          	return;
          }
           console.log(1)
    })
})