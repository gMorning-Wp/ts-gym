//  TupleToObject 语义含义： 元组转化为对象
// type TupleToObject<T extends readonly any[]> = any



// ts 实现   [P in keyof T]: P    keyof 得到数组的索引
type TupleToObject<T extends readonly (number | string | symbol)[]> = {
  [P in T[number]]: P
}


// // @ts-expect-error
// type error = TupleToObject<[[1, 2], {}]>
// number | string | symbol)[] 限制数组中只能是number string symbol类型

// 用于测试
const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const

type r = TupleToObject<typeof tuple>




// js 实现

// function TupleToObject(arr) {
//   let obj  ={}
//   arr.forEach(i => {
//     obj[i] = i; 
//   });
//   return obj
// }


// 知识点:
// 1. typeof  
// const  let object arr js世界的东西
// type  interface ts世界的东西    如果希望将js =》 ts  则使用 typeof来得到

// 2. as const  不允许我们的类型进行变化

// e.g
const a = ['ddd']
type kType = typeof a   // string[]
const aconst = ['ddd'] as const
type aconstType = typeof aconst  // readonly ["ddd"]
