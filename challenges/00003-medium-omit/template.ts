// 方案1
// type MyOmit<T, K extends keyof T> = {
//     [ P in keyof T as P  extends K ? never : P]: T[P]
// }

// as 的作用

// 在 TypeScript 4.1 及更高版本中，as 关键字还可以在映射类型中用于重新映射键名。这允许您在创建新类型时更改键的名称。

// 方案2 利用 Exclude方法
// type MyOmit<T, K extends keyof T> = {
//   [P in Exclude<keyof T, K>]: T[P];
// };

// 方案3 利用Pick 和Exclude
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T , K>>



// 利用了 Pick 中的 mapped Type  [P in keyof T]
// 利用了 Pick 中的 indexed Type T[P]
// 利用了 Union 类型的 分布式条件约束