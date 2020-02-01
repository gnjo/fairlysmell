# fairysmell
update system
```
//pug
script(src="https://gnjo.github.io/fairysmell/fairysmell.js")
script(src="https://gnjo.github.io/fairysmell/fairysmell.d.js")
```
```
//usage
fairysmell()//
```
```
var 
$waitcount=0  //if $waitcount>0, keyblock
,$mode='' //mes or sel or ''
,$trick=0
,$_trick=0
,$skipframe=4 //skipfame 1 to $skipmax-1. dont 0
,$image
,$imagename
,$mesary=[]
,$mesbuffer=[]
,$hint
,$sel
,$seln //select number
,$selname //select firstline
,$map
,$x
,$y
,$z
,$v
,$fmap //frontmap
,$party
,$partyn
,$keyconf=keyconfig('w,a,s,d,j,k,i,l,u,o')
,$key
//fairysmell() //firstcall start the draw loop
//flowmes(mes) //message input funciton. dont direct the $mesary
//keyconfig(str) //^,<,v,>,A,B,X,Y,L,R
//keycall(caller) //if want the key, call the keycall((k,del)=>{})// use end, need the del();
function fairysmell(){
 update();
}
function flowmes(mes){
 if(!mes) mes="\n\n\n"//clear
 return mes.split('\n').map(d=>$mesbuffer.push(d))
}
function keyconfig(str){
  //$keyconf={37:'<',39:'>',38:'^',40:'v',70:'A',68:'B',65:'X',83:'Y',82:'R',69:'L'}
  let t="^,<,v,>,A,B,X,Y,L,R".split(',')
  ,k=keystr.split(',').map(d=>if(d.length>1)?d:d.toUpperCase().charCodeAt(0))
  ,keys={}
  k.map((d,i)=>{ keys[d]=t[i] })
  return keys
 }
}
function keycall(caller){
 $key=''//oldkey reset
 let el=document.documentElement,del=()=>{el.onkeydown=void 0}
 //caller(k,del) //if use end, need the del()
 el.onkeydown=function(ev){
   if($waitcount||!$keyconf[ev.which])return;
   $key=$keyconf[ev.which],caller($key,del)
 }
}
/////////////////////
;['dwire','dimage','dhint','dparty','dmap','dmessage','dselect','dkey'].map(d=>this[d]=function stab(){})
//////////////////////
function update(timestamp){
 $_trick++
 if(!($_trick%$skipframe))return requestAnimationFrame(update);
 $trick++;
 $waitcount=Math.max(--$waitcount,0)
 if($mesbuffer.length){
  $waitcount++;
  $mesary.push($mesbuffer.shift())
  $mesary=$mesary.slice(-4)
 }
 ////
 dwire($fmap)
 dimage($image,$imagename) 
 dhint($hint)
 dparty($party,$partyn)
 dmap($map,$x,$y,$z,$v)
 if($mode==='mes')dmessage($mesary)
 if($mode==='sel')dselect($sel,$seln,$selname)
 dkey($key)
 ////
 return requestAnimationFrame(update);
}
//////////////////////
```
