const fnn41 = <T>(arg: T): T => arg;
const fnn42 = <T>(arg: T) => arg;

const res41 = fnn41('2312');
const res42 = fnn41<string>('2312');
const res43 = fnn42('2312');
const res44 = fnn41<string>('2312');

//
//

const fnn43 = <T>(arg: T[]) => {
  console.log(arg.length);
  return arg;
};

const fnn44 = <T extends { length: number }>(arg: T) => {
  console.log(arg.length);
  return arg;
};

//
//

function identity<Type>(arg: Type): Type {
  return arg;
}

let myIdentity: <Input>(arg: Input) => Input = identity;
let myIdentity2: (arg: number) => number = identity;

//

function identity3<Type>(arg: Type): Type {
  return arg;
}
let myIdentity3: { <Type>(arg: Type): Type } = identity3;

//

interface GenericIdentityFn {
  <Type>(arg: Type): Type;
}
function identity4<Type>(arg: Type): Type {
  return arg;
}
let myIdentity4: GenericIdentityFn = identity4;

//
//

type xcc00 = { a: number; b: string };
type rgt = keyof xcc00;

//
//

function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
  return obj[key];
}

let xcc = { a: 1, b: 2, c: 3, d: 4 };
getProperty(xcc, 'a');
getProperty(xcc, 'm');

//
//

type Arrayish = { [n: number]: unknown };
type Ac = keyof Arrayish;

type Mapish = { [k: string]: boolean };
type Mc = keyof Mapish;

//
//
//
//

type Predicate = (x: unknown) => boolean;
type Kc = ReturnType<Predicate>;

//
//

function f() {
  return { x: 10, y: 3 };
}
type Pc = ReturnType<typeof f>;
type Pc1 = ReturnType<keyof f1>;

//
//
