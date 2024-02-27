// type MyReadonly2<T, K extends keyof T = keyof T> = {
//     [key in MyExclude2<keyof T, K>]: T[key];
//   } & {
//   readonly [key in K]: T[key];
// } ;
// // // 实现一下MyExclude2 从union 中抛除另外一个union 得到剩下的
// type MyExclude2<T, K> = T extends K ? never : T;

// type error = MyReadonly2<Todo1, 'title' | 'invalid'>

// MyReadonly2 可能没有第二个参数

// 思路 先解决希望进行readonly的   [key in K] 循环 后面的Uion 的 键 ，同时注意可能没有第二个范型参数时给其赋默认值 = keyof T
// 再解决 非K范围内的，不设置readonly. 问题就变成了 keyof T - K 的，这不就是exclude吗



// 上面的实现会导致   Expect<Alike<MyReadonly2<Todo2, 'description' >, Expected>>, 这个case不通过，选择下面的实现

// 拆解成这样了
// interface Todo2 {
//     readonly title: string
//     description?: string
//     completed: boolean
//   }

// type ADD<T, K extends keyof T = keyof T>= {
//       [key in MyExclude2<keyof T, K>]: T[key];
//     }

//     type ADDD<T, K extends keyof T = keyof T>= {
//           readonly [key in K]: T[key];
//         }

// type ADDA = ADD<Todo2,'description'>

// type ADDB = ADDD<Todo2,'description'>


// -------
//  换一种思路

// 相同的思路。

// 我们先循环得到不属于readonly的属性 并和属于readonly 的进行合并动作


type MyReadonly2<T,K extends keyof T = keyof T> ={
[P in keyof T as P extends K ? never : P ] :T[P]
}  & {
    readonly [P in K]: T[P]
}

