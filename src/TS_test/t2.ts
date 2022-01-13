type TFn1 = {
  num: number;
  (a: number): number;
};

const fn1: TFn1 = a => a * 2;
fn1.num = 10;

const fn4 = (cb: TFn1) => {
  return cb.num * 10 + cb(2);
};

//
//

function fn5<T>(list: T[]): T | undefined {
  return list[0];
}

const fn6 = <T>(list: T[]): T | undefined => {
  return list[0];
};

//
//

const map = <Input, Output>(
  arr: Input[],
  func: (arg: Input) => Output,
): Output[] => {
  return arr.map(func);
};
// Parameter 'n' is of type 'string'   'parsed' is of type 'number[]'
const parsed = map(['1', '2', '3'], n => parseInt(n, 10));

//
//

function minimumLength<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): Type {
  if (obj.length >= minimum) {
    return obj;
  }
  return { length: minimum };
}

function minimumLength2<Type extends { length: number }>(
  obj: Type,
  minimum: number,
): { length: number } {
  if (obj.length >= minimum) {
    return obj;
  }
  return { length: minimum };
}

//
//

function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
  return arr1.concat(arr2);
}
const arr = combine([1, 2, 3], ['hello']);
const arr2 = combine<string | number>([1, 2, 3], ['hello']);

//
//
// УБРАТЬ ЗНАК ВОПРОСА
function myForEach(arr: any[], callback: (arg: any, index?: number) => void) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i);
    // I don't feel like providing the index today
    // callback(arr[i]);
  }
}
myForEach([1, 2, 3], (a, i) => console.log(i.toFixed()));
myForEach([1, 2, 3], a => console.log(a));

//
//

function makeDate(timestamp: number): Date;
function makeDate(m: number, d: number, y: number): Date;
// Знаки вопросов не влияют на проверку
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  }
  return new Date(mOrTimestamp);
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3);

//
//

const user = {
  id1: 123,
  admin: false,
};
interface User {
  id1: number;
  admin: boolean;
}
interface DB {
  filterUsers(filter: (this: User) => boolean): User[];
}

const db = getDB();
const admins = db.filterUsers(function (this: User) {
  return this.admin;
});

//
//

const aa1 = (): void => {};
const aa2 = (): undefined => {};

//
//

const vv1 = (): string => '123';
const vv2 = (): object => ({});
const vv3 = (): object => ({ id: 1 });

//
//

const nn1 = (data: string): unknown => JSON.parse(data);
const res1 = nn1<{ id: number }>(JSON.stringify({ id: 1 }));

//
//

function fail(msg: string): never {
  throw new Error(msg);
}

//
//

const args = [8, 5] as const;
const angle = Math.atan2(...args);

//
//
type voidFunc = () => void;

const f1: voidFunc = () => true;
const res3 = f1();
const f2 = (): void => true;
