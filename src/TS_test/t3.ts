interface Ii {
  readonly age: number;
}

const obj1: Ii = { age: 22 };
obj1.age = 33;

//
//

interface Ii2 {
  readonly info: { age: number };
}

const obj2: Ii2 = { info: { age: 22 } };
obj2.info.age = 33;

//
//

interface Cc {
  dd: string;
}
interface Xx extends Cc {
  vv: string;
}

const aa: Xx = { dd: 'fdf', vv: 'sdsad' };

//
//

interface Colorful {
  c: string;
}
interface Circle {
  r: number;
}

type ColorfulCircle = Colorful & Circle;
const mm: ColorfulCircle = { c: 'dfds', r: 34 };

//
//

interface Xxx<T> {
  cc: T;
}
const xxx: Xxx<number> = { cc: 33 };

//
//

let arr11: readonly number[] = [];
arr11.push(111);
arr11 = 10;

//
//

type TArr = [number, string];
const arr32: TArr = [22, '123'];

//
//

let point = [3, 4] as const;
function distanceFromOrigin([x, y]: [number, number]) {
  return Math.sqrt(x ** 2 + y ** 2);
}
distanceFromOrigin(point);

//

let point1 = [3, 4] as const;
type aa24 = typeof point1;
const distanceFromOrigin1 = ([x, y]: aa24) => Math.sqrt(x ** 2 + y ** 2);
distanceFromOrigin1(point1);

//

let point2 = [3, 4] as const;
const distance2 = ([x, y]: readonly [3, 4]) => Math.sqrt(x ** 2 + y ** 2);
distance2(point1);
