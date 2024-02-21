// 假如我们有一个 Promise 对象，这个 Promise 对象会返回一个类型。在 TS 中，我们用 Promise<T> 中的 T 来描述这个 Promise 返回的类型。请你实现一个类型，可以获取这个类型。

// 例如：`Promise<ExampleType>`，请你返回 ExampleType 类型。

// ```ts
// type ExampleType = Promise<string>

// type Result = MyAwaited<ExampleType> // string

// ```

// type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
//   ? U extends PromiseLike<any>
//     ? MyAwaited<U>
//     : U
//   : never;




// 1. 条件约束 extends 是否为 类Promise 如果是则 占位U 是否类Promise 是 则递归 不是则取U
