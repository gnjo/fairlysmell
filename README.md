# fairysmell
update system
```
let 
$waitcount=0  //if $waitcount>0, keyblock
,$mode='mes'
,$trick=0
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
//fairysmell() //firstcall start the draw loop
//flowmes(mes) //message input funciton. dont direct the $mesary
//draw() //main
function fairysmell(){
 update();
}
function flowmes(mes){
 if(!mes) mes="\n\n\n"//clear
 return mes.split('\n').map(d=>$mesbuffer.push(d))
}
function update(timestamp){
 if($mesbuffer.length){
  $waitcount++;
  $mesary.push($mesbuffer.shift())
  $mesary=$mesary.slice(-4)
 }
 dwire($fmap)
 dimage($image,$imagename) 
 dhint($hint)
 dparty($party,$partyn)
 dmap($map,$x,$y,$z,$v)
 if($mode==='mes')dmessage($mesary)
 if($mode==='sel')dselect($sel,$seln,$selname) 
 //
 $trick++;
 $waitcount=Math.max(--$waitcount,0)
 return requestframestep(draw);
}

```
