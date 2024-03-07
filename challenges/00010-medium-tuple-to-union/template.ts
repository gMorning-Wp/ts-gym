
 // 方案1 
// type TupleToUnion<T extends any[]> = T[number]

//  方案2
// type TupleToUnion<T> = T extends Array<infer ITEM> ? ITEM :never