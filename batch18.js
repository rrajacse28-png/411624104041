function example(){
    console.log("B");
}
 
const example2 = ()=>{
   console.log("D");
}

console.log("A")
setTimeout(example,0) 
setTimeout(example,2000)
console.log("C")

const promise= new Promise((resolve,reject)=>{
   setTimeout(()=>{
    console.log("hi")
   },1000)
})

promise.then(res=>{console.log(res)})
.catch(err=>{console.log(err)})