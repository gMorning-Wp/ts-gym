type MyExclude<T, U> = T extends U ? never : T

// 用到了份分布式条件  
// 1. 对于union类型的extends 是分开映射循环约束的
// 2. 对于union类型 是没有never的 ，所以起到了筛除的能力


// 大致思路 🤔
// 这道题给我们两个联合类型T和U（可以把联合类型看成是一个类型集合），求存在T中而不存在于U中的类型，从集合的角度来讲就是T - U，求差集。要求差集，先解决两个问题：1、如何判断T中的某个类型是否存在于U中。2、如何去除T中存在于U中的类型。
// 条件类型 ⚔️
// 条件类型可以根据类型输入来判断返回何种类型
// typescript复制代码示例1：
// // 报错 Type '"message"' cannot be used to index type 'T'.
// type MessageOf<T> = T["message"];
// // 正确的做法，extends约束了T必须有一个message的属性
// type MessageOf<T extends { message: unknown }> = T["message"];

// 示例2：
// type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

// 示例2，泛型T就是输入类型，先判断T是否满足{ message: unknown }的约束，如果T存在message属性，就返回message属性的类型，否则返回never。
// 如果T是一个联合类型，就会出现分布式条件的情况
// typescript复制代码type ToArray<Type> = Type extends any ? Type[] : never;
// type StrArrOrNumArr = ToArray<string | number>;  // string[] | number[]

// // 等价于
// type StrArrOrNumArr = (string extends any ? string[] : never)
// | (number extends any ? number[] : never)

// 这两种情况是等价的，也就是说分布式条件会对联合类型中的每个类型都判断一次，并且运算的结果也是联合类型。那么我们可以利用这一点来判断T中的类型是否存在于U中，即T中的每个类型是否满足U的约束。
// 答案 📄
// typescript复制代码type MyExclude<T, U> = T extends U ? never : T

// 当T中的类型存在于U中时，就返回never是为了剔除掉这个类型。举个例子再结合上面所讲的条件类型，应该会比较清晰了。
// typescript复制代码type excludeNever = string | never | number  // string | number

// 可以看到最终生成的联合类型是没有never的。
// 现在假设T='a' | 'b' | 'c'，U='a'，那么答案给出的代码就等价于
// php复制代码('a' extends 'a' ? never : 'a')
// | ('b' extends 'a' ? never : 'b')
// | ('c' extends 'a' ? never : 'c')

// never | 'b' | 'c' => 'b' | 'c'

// 这样不就求出了T-U嘛。

