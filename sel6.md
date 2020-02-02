# sel6

```
let str=sel6(ary,n,head)  //cur =*
str=`
aaaaa [1/9]
*choice0
 choice1
 choice2
 choice3
 choice4
 choice5
`

const arrayChunk = ([...array], size = 1) => {
  return array.reduce((acc, value, index) => index % size ? acc : [...acc, array.slice(index, index + size)], []);
}

function sel6(ary,n,head,_cur){
 let cur=_cur||'＊'
 ,a=arrayChunk(ary,6)
 ,pmax=a.length
 ,pnow=Math.floor(n/6)
 ,a=a[pnow]
 ,m=n%6
 ,mes1=`${head} [${pnow}/${pmax}]`+'\n'
 ,mes2=a.map((d,i)=>(m===i)?cur+d:'　'+d).join('\n')
 ;
 return mes1+mes2
}

```
