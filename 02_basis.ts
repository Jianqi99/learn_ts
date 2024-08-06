// 声明一个变量a 指定类型为number
export let a: number = 0;
a = 10;
console.log(a);

export let b: string;
b = 'hello';
console.log(b);

export let c: boolean = true;
console.log(c);

// JS种的函数不考虑参数的类型和个数
function sum(a: number, b: number) :number{
    return a + b;
}

let result = sum(123, 456);
console.log(result);