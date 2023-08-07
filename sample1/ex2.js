// console.error() , dir , time , timeEnd
console.error(new Error('에러 메세지 나옴'))

const arr = [
    {name : '기만샘' , age : 30 },
    {name : '엄준식' , age : 22 }
];
console.table(arr);
const obj = {
    data:{
        obj1 : {
            class1:{},
            class2:{}
        },
        obj2 : {
            class1:{},
            class2:{}
        },
        names:['기만샘','김고은']
    }
}
console.dir(obj)
console.dir(obj , {depth:1,colors:true})
console.time('time start')
for(let i=0 ; i <= 9999; i++){}
console.timeEnd('time start')