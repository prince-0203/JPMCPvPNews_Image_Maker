$(function(){var e=$("#canvas"),t=$("#form"),r=function(){var r=new Image;r.src="http://prince.webcrow.jp/avatar.php?id="+$("#minecraftId",t).val(),r.setAttribute("crossOrigin","Anonymous"),r.onload=function(){e.clearCanvas().drawImage({source:"punish.png",x:0,y:0,fromCenter:!1,load:function(){e.drawImage({source:r,x:110,y:301,width:97,height:96,fromCenter:!1,load:function(){e.drawText({fillStyle:"white",strokeStyle:"white",x:240,y:300,strokeWidth:.1,fromCenter:!1,fontSize:85,fontFamily:"rounded_m_1pregular",text:$("#minecraftId",t).val()}).drawText({fillStyle:"white",strokeStyle:"white",x:395,y:500,strokeWidth:.1,fromCenter:!1,fontSize:55,fontFamily:"rounded_m_1pregular",text:$("#reason",t).val()}).drawText({fillStyle:"white",strokeStyle:"white",x:1068,y:423,strokeWidth:.1,fromCenter:!1,fontSize:70,fontFamily:"rounded_m_1pregular",text:"("+$("#server",t).val()+")"}).drawText({fillStyle:"white",strokeStyle:"white",x:520,y:650,strokeWidth:.1,fromCenter:!1,fontSize:85,fontFamily:"rounded_m_1pregular",text:$("#type",t).val()}).drawText({fillStyle:"white",strokeStyle:"white",x:955,y:743,strokeWidth:.1,fromCenter:!1,fontSize:40,fontFamily:"rounded_m_1pregular",text:"("+$("#dayTime",t).val()+")"}),$("#copyImage",t).attr("href",e.getCanvasImage("png"))}})}})}};$("#generate",t).click(r),r()});
//# sourceMappingURL=index.js.map
