     
/**
*下拉菜单的显示与隐藏
*/	 
function   list(flag){
			
	     var display = jQuery("#p"+flag).css("display");
			
         if("none" == display){
	        jQuery("#p"+flag).css("display","block");
	     }
		 
	     if("block" == display){
	       jQuery("#p"+flag).css("display","none");
	     }
	}
