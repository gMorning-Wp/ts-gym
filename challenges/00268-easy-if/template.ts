type If<C extends Boolean, T, F> =  C extends true ? T : F

// 几个范型入参 C 被true 限制的话则 返回T 否则返回F 
// 同时限制 C 只能是Boolean类型