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
//
//

type Person = { age: number; name: string; alive: boolean };
type Age = Person['age'];

type AliveOrName = 'alive' | 'name';
type I3 = Person[AliveOrName];

type I1 = Person['alve'];

//
//

const MyArray = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 23 },
  { name: 'Eve', age: 38 },
];

type Person1 = typeof MyArray[number];
type Age1 = typeof MyArray[number]['age'];
type Age2 = Person['age'];

const key = 'age';
type Age3 = Person[key];

//
//
//
//

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}

type Example1 = Dog extends Animal ? number : string;
type Example2 = RegExp extends Animal ? number : string;

//
//

interface IdLabel {
  id: number /* some fields */;
}
interface NameLabel {
  name: string /* other fields */;
}

type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
  throw 'unimplemented';
}

let a1 = createLabel('typescript');
let b1 = createLabel(2.8);
let c1 = createLabel(Math.random() ? 'hello' : 42);
let ii1 = createLabel({});

//

function createLabel1<T extends number | string | boolean>(
  idOrName: T,
): NameOrId<T> {
  throw 'unimplemented';
}
let ii00 = createLabel1(true);

//
//
//
//

type OptionsFlags<Type> = {
  [Property in keyof Type]: boolean;
};

type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};
type FeatureOptions = OptionsFlags<FeatureFlags>;

//
//

type Getters<Type> = {
  [Prop in keyof Type as `get${Capitalize<string & Prop>}`]: () => Type[Prop];
};

interface Person123 {
  name: string;
  age: number;
  location: string;
}

type LazyPerson = Getters<Person123>;

//
//
//
//

type EmailLocaleIDs = 'welcome_email' | 'email_heading';
type FooterLocaleIDs = 'footer_title' | 'footer_sendoff';

type AllLocaleIDs = `${EmailLocaleIDs | FooterLocaleIDs}_id`;

//
//

type Greeting = 'Hello, world';
type ShoutyGreeting = Uppercase<Greeting>;
