// 也可以使用字面量进行类型声明

export let a: 10;
a = 10;
// |可以来链接多个类型

export let b: "hello" | "world" | "!";
// 联合类型

export let c: boolean | string;

// any可以任意赋值 一个变量类型设置为any相当于对该变量关闭了类型检测
// 使用TS不建议使用any
export let d: any;
// let d;
// 声明变量如果不指定类型，解析器会自动判断变量类型为any（隐式的any）
d = 10;
d = "hello";
d = true;

// unknown表示未知类型的值
export let e: unknown;
e = 10;
e = "hello";
e = true;

export let s: string = "www";
// unknown是一个类型安全的any
// unknown类型的变量不能直接赋值给其他变量
if(typeof e === "string") {
    s = e;
}

console.log(s);

// 类型断言，可以用来告诉解析器变量的实际类型
/* 语法：
   变量 as 类型
   <类型>变量
 */
s = e as string;
console.log(s);

s = <string>e;

// void never
function fn(num: number): string | boolean {
    if (num > 0) {
        return true;
    } else {
        return "123"
    }
}

// void用来表示空，以函数为例，就表示没有返回值的函数
function fn1(): void{
    return;
}

// never表示永远不会返回结果
function fn2(): never{
    throw new Error("报错咯");
}





