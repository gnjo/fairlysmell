# fairlysmell
draw system
```
let 
 $mode='mes'
,$trick=0
,$image
,$imagename
,$mes
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
///
function draw(timestamp){

 dwire($fmap)
 dimage($image,$imagename) 
 dhint($hint)
 dparty($party,$partyn)
 dmap($map,$x,$y,$z,$v)
 if($mode==='mes')dmessage($mes)
 if($mode==='sel')dselect($sel,$seln) 
 //
 $trick++;
 return requestframestep(draw);
}

```
