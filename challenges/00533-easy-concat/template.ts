type Concat<T extends readonly unknown[], U extends readonly unknown[]> = [...T, ...U];

// 1. Ts支持类型解构
// 对于类型入参 需要约束 为数组