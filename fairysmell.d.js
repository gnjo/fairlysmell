
var
 $ctx
,$fontb=14 //big
,$fonts=9 //small
,$wirew=3 //wirewidth
,$color1='white' //
,$color2='black' 
,$color3='#0097a7' //cyberblue
,$color4='#eeff41' //lime
,$color5='rgba(0, 0, 0, 0.76)' //#000000c1 shadow

function setstyle(name,ctx){
  if(name==='dimage'||name==='dkey'){
   ctx.fillStyle = $color3
   ctx.font = $fontb+"px monospace";
   //ctx.textAlign = "left";
   //ctx.textBaseline = "top";
   return;
  }
}

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
  setstyle('dimage',$ctx)
  $ctx.fillText(str,$fontb,$fontb)
  return;
 }
 //center
 let a=getcenterize(img),x=a[0],y=a[1],y1=y-$fontb
 $ctx.drawImage(img,x,y)
 setstyle('dimage',$ctx) 
 $ctx.fillText(str,x,y1)
 return
}
function dwire(fmap){
}
function dhint(str){
}
function dparty(party,n){
}
function dmap(map,x,y,z,v){
 //N top map
}
function dmessage(ary){
}
function dselect(sel,n){
}
function dkey(k){
 let x=$ctx.canvas.width-$fontb,y=$ctx.canvas.width-$fontb;
 setstyle('dkey',$ctx)
 $ctx.fillText(k,x,y)
}

