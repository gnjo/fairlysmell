# fairlysmell
draw system
```
let 
$waitcount=0  //if wait count>0, keyblock
,$mode='mes'
,$trick=0
,$image
,$imagename
,$mesary=[]
,$mesbuffer=[]
,$hint
,$sel
,$seln
,$map
,$x
,$y
,$z
,$v
,$fmap //frontmap
,$party
,$partyn
//first call firlysmell()
function firlysmell(){
 draw();
}
//
function flowmes(mes){
 return mes.split('\n').map(d=>$mesbuffer.push(d))
}
function draw(timestamp){
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
 if($mode==='sel')dselect($sel,$seln) 
 //
 $trick++;
 $waitcount=Math.max(--$waitcount,0)
 return requestframestep(draw);
}

```
