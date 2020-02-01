
var
 $gain=10
,$ctx=makecanvas(35*$gain,24*$gain)
,$fontb=1.2*$gain //big
,$fonts=0.9*$gain //small
,$layerinfo
,$wirew=3 //wirewidth
,$color1='white' //
,$color2='black' 
,$color3='#0097a7' //cyberblue
,$color4='#eeff41' //lime
,$color5='rgba(0, 0, 0, 0.76)' //#000000c1 shadow

function makecanvas(w,h){
 let fn={}
 fn.q=(s,doc=document)=>{return doc.querySelector(s)} 
 let c=fn.q('canvas')
 c.width=w,c.height=h
 return c.getContext('2d');
}
function getlayerinfo(name){
 if($layerinfo)return $layerinfo(name);
 //x,y,x1,y1 ,w,h,cx,cy
 let info={},f=(o){
  Object.keys(o).map(key=>o[key]=o[key]*$gain);
  o.w =o.x1-o.x
  o.h=o.y1-o.y
  o.cx=o.x+o.w/2
  o.cy=o.y+o.h/2
  return o
 }
 info.dcanvas=f( {x:0,y:0,x1:35,y1:24} )
 info.dimage=f( {x:11,y:7,x1:15,y1:16} )
 info.dmes=f( {x:0,y:0,x1:26,y1:6} )
 info.dsel=f( {x:0,y:11,x1:10,y1:23} )
 info.dhint=f( {x:0,y:23,x1:26,y1:24} )
 info.dwire=f( {x:0,y:0,x1:26,y1:23} )
 info.dmap=f( {x:27,y:0,x1:35,y1:23} )
 info.dmappos=f( {x:27,y:23,x1:35,y1:24} )
 info.dparty=f( {x:9,y:16,x1:21,y1:24} )
 info.dkey=f( {x:25,y:22,x1:26,y1:23} )
 ;
 $layerinfo=info;
 return $layerinfo(name)
}
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
 let h=getlayerinfo('dimage').h
 return (img.height>h)?true:false
}
function getcenterize(img){
 let info=getlayerinfo('dwire')
 let x=info.w/2 - img.width/2
 ,y=info.w/2 - img.height/2
 return [x,y]
}
function dimage(d,str){
 if(!d)return;
 let img=new Image();img.src=d // data:URL
 let info=getlayerinfo('dwire'),w=img.width,h=img.height
 //background or center
 if(isbg(img)){
  let w=info.w,h=info.h
  $ctx.drawImage(img,0,0,w,h)
  setstyle('dimage',$ctx)
  $ctx.fillText(str,$fontb,$fontb)
  return;
 }
 //center
 let a=getcenterize(img),x=a[0],y=a[1],y1=y-$fontb
 $ctx.drawImage(img,x,y) //wide fit...
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

