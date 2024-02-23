type MyParameters<T extends (...args: any[]) => any> = T extends (...args: infer Arr) => any ? Arr :never


//  infer的使用， 对于参数进行 假设 X 占位 如果条件满足则返回 占位X
// https://github.com/Microsoft/TypeScript/pull/24897