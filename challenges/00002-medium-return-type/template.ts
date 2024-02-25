// type MyReturnType<T extends (...args: unknown[] )=> unknown> = T extends  (...args: unknown[] )=> infer R ? R : never
// TODO:  这里的 unkown[] 导致了case是错的没理解为啥 

// 改成下面的 case通过

type MyReturnType<T extends (...args: never[] )=> unknown> = T extends  (...args: never[] )=> infer R ? R : never
