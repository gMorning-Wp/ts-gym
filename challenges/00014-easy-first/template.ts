// type First<T extends any[]> = any



// 实现1:

// type First<T extends any[]> = T['length'] extends 0 ? never: T[0]

// 实现2:

// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never

// 实现3: infer 可以理解成数组解构

type First<T extends any[]> = T extends [infer First, ...infer rest] ? First : never


// 实现4:

// type First<T extends any[]> = '0' extends keyof T ? T[0] : never