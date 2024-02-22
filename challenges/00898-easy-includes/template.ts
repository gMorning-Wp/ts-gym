// type Includes<T extends readonly any[], U> = any

//  -----------

// 当前只学习了 在对象的key 上进行数组方式的循环。因此 尝试实现如下：
// type Includes<T extends readonly any[], U> = {[P in  T[number]]: true}[U] extends true ? true : false
// 但是这样 队医其中的P 其实只能是 string number symbol 类型 不能是其他类型，所以导致测试case不能通过

// 类似于的js的循环 实现
// function includes(T:any[],U:any) {
//     let ret =false
//     for (let index = 0; index < T.length; index++) {
//         const element = T[index];
//         if(element === U){
//             ret = true
//         }
//         break;
//     }

//     return ret
// }

// ------------

// 所以我们可以选择递归的方式来循环数组 并用数组中的每一项去判断

import type { Equal } from "@type-challenges/utils";

export type Includes<T extends readonly any[], U> = T extends [
  infer First,
  ...infer Rest
]
  ? Equal<First, U> extends true
    ? true
    : Includes<Rest, U>
  : false;


  // 知识点1: 用递归来实现循环数组
  // 知识点2: 当ts文件使用了import/export 时则变成了模块式， 当没有import/export 时 则为全局的
