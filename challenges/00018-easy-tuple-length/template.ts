// type Length<T> = any


type Length<T extends readonly any[]> = T['length']

// js

 function getLength(arr:any){
    if(!Array.isArray(arr)) return;
    return arr.length;
 }


// 知识点
// 什么是 tuple 类型
// tuple 和 普通的数组有什么区别


type strArr = string[]

type strArrType = strArr['length']  // number


type strTupleArr = [string,number] 

type strTupleArrType = strTupleArr['length']  // 2


// 加上as const（字面量类型） 变成了 元组tuple
const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const // readonly ["tesla", "model 3", "model X", "model Y"]