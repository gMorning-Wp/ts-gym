
// 方案1 
// type Primary = string | number | boolean | Function;
// type DeepReadonly<T> = {
//   readonly [key in keyof T]: T[key] extends Primary ? T[key] : DeepReadonly<T[key]>
// } 



// 方案2  ❓

type DeepReadonly<T> =  keyof T extends never ? T : {readonly [p in keyof T] : DeepReadonly<T[p]>}

// 这里有个问题点 为啥 keyof T extends never   的keyof T 什么时候等于never
// keyof T 的T 不为对象的时候 其继承never ？ 这也不对啊


// type nu = 'a' | 'b'

// type oo =keyof nu
