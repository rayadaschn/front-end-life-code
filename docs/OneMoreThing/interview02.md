---
title: Interview -- JS 基础知识
icon: note
date: 2023-07-30
category:
  - anonymous
tag:
  - note
star: false
# sticky: true
sticky: false
---

在此梳理 JS 基础知识的一些问题。

## 目录

- 值类型和引用类型
- [typeof 运算符](#2)
- [手写深拷贝](#手写深拷贝)
- [类型转换](#类型转换)
- [var 和 let const 的区别](#5)
- [typeof 返回哪些类型](#6)
- [数组的 pop、push、unshift、shift 分别是什么？](#7)
- [数组有哪些纯函数方法](#数组有哪些纯函数方法)

### 值类型和引用类型

值类型： Number、String、Boolean、Symbol、undefined

引用类型：Object、Array、Null(特殊引用类型、指针指向空地址)、Function(特殊引用类型,但不存储数据,所以没有"拷贝、复制函数"的说法)

### typeof 运算符 <span id='2' />

作用： 识别所有值类型、识别函数和判断是否是引用类型（不可再细分）

### 手写深拷贝

步骤:

1. 判断是否为 objec array 类型或者 null, 否则直接返回;
2. 判断是否为数组类型, 若为数组则定义拷贝类型为数组类型,否则为对象类型;
3. 遍历待拷贝数据的非原型属性, 则递归拷贝。（此处无需再判断属性是否为复杂类型，递归中会自行判断）

```js
const obj1 = {
  age: 20,
  name: '小明',
  address: {
    city: '上海',
  },
  tool: ['a', 'b', 'c'],
}

function deepClone(obj) {
  if (typeof obj === 'object' && obj !== null) {
    const copyObj = obj instanceof Array ? [] : {} // 也可用 Array.isArray(obj)，或者 Object.prototype.toString.call(obj) === '[object, Array]'
    for (let key in obj) {
      // 保证 key 不是原型属性
      if (obj.hasOwnProperty(key)) {
        // 递归调用
        copyObj[key] = deepClone(obj[key])
      }
    }
    return copyObj
  }
  return obj
}
```

### 类型转换

首先总结常用的隐式类型转换，能够产生隐式类型转换的有 if、逻辑运算、`+-`拼接字符串和 `==`。

- if 判断

  `if` 其实判断的是 `truly` 变量和 `falsely` 变量。

  > 假设有一个变量为 a：
  >
  > - 若 `!!a === true` 则表示为 truly 变量
  > - 若 `!!a === false` 则表示为 falsely 变量

  `falsely` 变量有 6 个：`0`、`false`、`''`（空字符串）、`null`、`undefined` 和 `NaN`，**其余全部是 `truly` 变量**。

- `+-`字符串拼接

  ```js
  const a = '100' + 10 // '10010'
  const b = '100' - 10 // 90
  const c = true + '10' // 'true10'
  const d = true + 10 // '11'
  const e = true - '10' // '-9'
  ```

  加号会转换为字符串拼接; 减号两边都会转换为数值, 再进行减法; Boolean 类型则看拼接的类型。

- "=="

  ```js
  100 == '100' // true
  0 == '' // true
  0 == false // true
  false == '' // true
  null == undefined // true
  ```

  > 除用 `== null` 判断 `null` 或 `undefined` 类型外, 其余一律用 `===`
  >
  > `val == null` 相当于 `val === null || val === undefined`，原因在于 `null` 和 `undefined` 在隐式转换时都会转换为 `false`。

总结规律:

1. 如果两个操作数的类型相同，那么它们将按照相等性规则进行比较，返回相应的布尔值。
2. 如果一个操作数是 `null`，另一个操作数是 `undefined`，则它们相等。
3. 如果一个操作数是**数字**，另一个操作数是字符串，JavaScript 会尝试将字符串转换为数字，然后进行比较。
4. 如果一个操作数是**布尔值**，另一个操作数是非布尔值（除了 `null` 和 `undefined`），JavaScript 会尝试将布尔值转换为数字（`true` 转换为 1，`false` 转换为 0），然后进行比较。
5. 如果一个操作数是**对象**，另一个操作数是原始类型（数字、字符串、布尔值），JavaScript 会尝试调用对象的 `valueOf()` 或 `toString()` 方法，将对象转换为原始类型的值，然后进行比较。

强制类型转换（显式类型转换）：

1. 字符串转换：使用 `String()` 函数或 `toString()` 方法将其他类型的值转换为字符串。

   ```javascript
   let num = 123
   let str = String(num)
   console.log(str) // 输出 "123"

   let bool = true
   let boolStr = bool.toString()
   console.log(boolStr) // 输出 "true"
   ```

2. 数值转换：使用 `Number()` 函数将其他类型的值转换为数值，此外还有 `parseInt` 和 `parseFloat`（`parseInt` 和 `parseFloat` 的第二个参数为要转换成的进制）。

   ```javascript
   let str = '456'
   let num = Number(str)
   console.log(num) // 输出 456

   let bool = true
   let boolNum = Number(bool)
   console.log(boolNum) // 输出 1
   ```

3. 布尔转换：使用 `Boolean()` 函数将其他类型的值转换为布尔值。

   ```javascript
   let num = 0
   let bool = Boolean(num)
   console.log(bool) // 输出 false

   let str = 'Hello'
   let strBool = Boolean(str)
   console.log(strBool) // 输出 true
   ```

### var 和 let const 的区别 <span id='5' />

在 JavaScript 中，`var`、`let`和`const`是用于声明变量的关键字，它们之间有一些重要的区别。

1. 作用域：`var`声明的变量存在函数作用域或全局作用域，而`let`和`const`声明的变量存在块级作用域。块级作用域由一对大括号 `{}` 来定义，例如 if 语句、循环或函数等。

   ```javascript
   // 使用 var
   function example() {
     var x = 1
     if (true) {
       var x = 2 // x 在整个函数作用域内都可见
       console.log(x) // 输出 2
     }
     console.log(x) // 输出 2
   }

   // 使用 let
   function example() {
     let x = 1
     if (true) {
       let x = 2 // x 只在块级作用域内有效
       console.log(x) // 输出 2
     }
     console.log(x) // 输出 1
   }
   ```

2. 变量提升（Hoisting）：使用 `var` 声明的变量会被提升到其作用域的顶部，可以在声明之前访问到（但是值为 `undefined`），而使用 `let` 和 `const` 声明的变量不会被提升。

   ```javascript
   // 使用 var
   console.log(x) // 输出 undefined
   var x = 1

   // 使用 let
   console.log(x) // 抛出 ReferenceError: x is not defined
   let x = 1
   ```

3. 重复声明：使用 `var` 可以多次声明同一个变量而不会报错，而使用 `let` 或 `const` 在同一个作用域内重复声明同一个变量会抛出错误。

   ```javascript
   // 使用 var
   var x = 1
   var x = 2 // 有效，但不推荐这样做

   // 使用 let
   let x = 1
   let x = 2 // 抛出 SyntaxError: Identifier 'x' has already been declared

   // 使用 const
   const x = 1
   const x = 2 // 抛出 SyntaxError: Identifier 'x' has already been declared
   ```

4. 可变性：使用 `var` 和 `let` 声明的变量是可变的（可重新赋值），而使用 `const` 声明的变量是不可变的（常量），一旦被赋值就不能再修改。

   ```javascript
   // 使用 var
   var x = 1
   x = 2 // 可以重新赋值

   // 使用 let
   let x = 1
   x = 2 // 可以重新赋值

   // 使用 const
   const x = 1
   x = 2 // 抛出 TypeError: Assignment to constant variable.
   ```

### typeof 返回哪些类型 <span id='6' />

`typeof` 是 JavaScript 的一个操作符，用于返回一个值的数据类型。`typeof` 可以返回以下类型的字符串：

1. `"undefined"`：表示未定义的值。
2. `"boolean"`：表示布尔值类型。
3. `"number"`：表示数字类型，包括整数和浮点数。
4. `"string"`：表示字符串类型。
5. `"object"`：表示对象或 null。注意，函数也是对象类型。
6. `"function"`：表示函数类型。
7. `"symbol"`：表示符号类型（ES2015 新增）。
8. `"bigint"`：表示大整数类型（ES2020 新增）。

以下是一些示例：

```javascript
console.log(typeof undefined) // 输出 "undefined"

console.log(typeof true) // 输出 "boolean"

console.log(typeof 42) // 输出 "number"

console.log(typeof 'Hello') // 输出 "string"

console.log(typeof BigInt(123)) // 输出 "bigint"

console.log(typeof Symbol('foo')) // 输出 "symbol"

console.log(typeof {}) // 输出 "object"

console.log(typeof null) // 输出 "object"，这是 typeof 的一个历史遗留问题

console.log(typeof function () {}) // 输出 "function"
```

> 需要注意的是，`typeof null` 返回 `"object"` 是 JavaScript 的一个历史遗留问题，实际上 null 是一个特殊的原始值，不属于对象类型。

### 数组的 pop、push、unshift、shift 分别是什么？ <span id='7' />

1. `pop()`: `pop()` 方法从数组的末尾移除一个元素，并**返回该元素的值**。它会**修改原始数组**。

   ```javascript
   const arr = [1, 2, 3, 4]
   const removedElement = arr.pop()
   console.log(arr) // 输出 [1, 2, 3]
   console.log(removedElement) // 输出 4
   ```

2. `push()`: `push()` 方法向数组的末尾添加一个或多个元素，并**返回新数组的长度**。它会**修改原始数组**。

   ```javascript
   const arr = [1, 2, 3]
   const newLength = arr.push(4, 5)
   console.log(arr) // 输出 [1, 2, 3, 4, 5]
   console.log(newLength) // 输出 5
   ```

3. `unshift()`: `unshift()` 方法向数组的开头添加一个或多个元素，并**返回新数组的长度**。它会**修改原始数组**。

   ```javascript
   const arr = [2, 3, 4]
   const newLength = arr.unshift(1)
   console.log(arr) // 输出 [1, 2, 3, 4]
   console.log(newLength) // 输出 4
   ```

4. `shift()`: `shift()` 方法从数组的开头移除一个元素，并**返回该元素的值**。它会**修改原始数组**。

   ```javascript
   const arr = [1, 2, 3, 4]
   const shiftedElement = arr.shift()
   console.log(arr) // 输出 [2, 3, 4]
   console.log(shiftedElement) // 输出 1
   ```

这些方法提供了对数组进行栈（后进先出）和队列（先进先出）操作的能力。`pop()` 和 `push()` 在数组的末尾进行操作，而 `unshift()` 和 `shift()` 在数组的开头进行操作。这些方法都会修改原始数组，并返回相应的值或长度。

### 数组有哪些纯函数方法?

纯函数是指在执行过程中不会修改原始数据，并且每次调用都返回一个新的数组。

1. `concat()`: 连接两个或多个数组，并返回一个新数组，不会修改原始数组。

   ```javascript
   const arr1 = [1, 2, 3]
   const arr2 = [4, 5, 6]
   const newArr = arr1.concat(arr2)
   console.log(newArr) // 输出 [1, 2, 3, 4, 5, 6]
   ```

2. `slice()`: 返回一个新数组，其中包含原始数组中指定部分的浅拷贝，不会修改原始数组。

   ```javascript
   const arr = [1, 2, 3, 4, 5]
   const newArr = arr.slice(1, 3)
   console.log(newArr) // 输出 [2, 3]
   ```

3. `map()`: 创建一个新数组，其元素是对原始数组元素调用提供的函数的结果，不会修改原始数组。

   ```javascript
   const arr = [1, 2, 3]
   const newArr = arr.map((item) => item * 2)
   console.log(newArr) // 输出 [2, 4, 6]
   ```

4. `filter()`: 创建一个新数组，其中包含原始数组中满足条件的所有元素，不会修改原始数组。

   ```javascript
   const arr = [1, 2, 3, 4, 5]
   const newArr = arr.filter((item) => item > 2)
   console.log(newArr) // 输出 [3, 4, 5]
   ```

除 pop、push、shift、unshift 外的几个非纯函数：

1. `reduce()`: 对数组中的每个元素执行一个提供的函数，并将结果汇总为单个值，不会修改原始数组，没有返回数组不是纯函数。

   ```javascript
   const arr = [1, 2, 3, 4, 5]
   const sum = arr.reduce((accumulator, item) => accumulator + item, 0)
   console.log(sum) // 输出 15
   ```

2. `every()`: 检测数组中的所有元素是否都满足给定的条件，返回一个布尔值，不会修改原始数组，没有返回数组不是纯函数。

   ```javascript
   const arr = [1, 2, 3, 4, 5]
   const allPositive = arr.every((item) => item > 0)
   console.log(allPositive) // 输出 true
   ```

3. `some()`: 检测数组中是否至少有一个元素满足给定的条件，返回一个布尔值，不会修改原始数组，没有返回数组不是纯函数。

   ```javascript
   const arr = [1, 2, 3, 4, 5]
   const hasNegative = arr.some((item) => item < 0)
   console.log(hasNegative) // 输出 false
   ```

4. `forEach()`: 数组循环，不返回值，可修改原数组，不是纯函数。

   ```js
   const arr = [1, 2, 3, 4]
   arr.forEach((item, index, array) => {
     array[index] = item * 2
   })
   console.log(arr) // 输出 [2, 4, 6, 8]
   ```

5. `splice()`: splice() 方法可以用于删除、插入和替换数组中的元素。它接受多个参数，其中最常用的是**起始索引**和**要删除的元素数量**。非纯函数，会直接修改原始数组，并返回被删除的元素组成的新数组（如果有的话）。

   ```js
   const arr = [1, 2, 3, 4, 5]
   const removed = arr.splice(1, 2) // 从索引 1 开始删除 2 个元素
   console.log(arr) // 输出 [1, 4, 5]
   console.log(removed) // 输出 [2, 3]
   ```