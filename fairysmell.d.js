
var
 $ctx
,$fontsize=16

function isbg(img){
 return (img.height>$ctx.canvas.height)?true:false
}
function getcenterize(img){
 let x=$ctx.canvas.width/2 - img.width/2
 ,y=$ctx.canvas.height/2 - img.height/2
 return [x,y]
}
function dimage(d,str){
 if(!d)return;
 let img=new Image();img.src=d // data:URL
 let w=img.width,h=img.height
 //background or center
 if(isbg(img)){
  let w=$ctx.canvas.width,h=$ctx.canvas.height
  $ctx.drawImage(img,0,0,w,h)
  $ctx.fillText(str,$fontsize,$fontsize)
  return;
 }
 //center
 let a=getcenterize(img),x=a[0],y=a[0],y1=a[0]-$fontsize
 $ctx.drawImage(img,x,y)
 $ctx.fillText(str,x,y1)
 return
}
