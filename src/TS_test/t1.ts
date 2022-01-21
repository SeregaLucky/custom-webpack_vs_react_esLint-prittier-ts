class User {
  id: string;
  name: string;
  allData: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
    this.allData = `${id}: ${name}`;
  }
}

//
//

interface IBack<Type> {
  add(obj: Type): void;
  get(): Type;
}

declare const back: IBack<string>;

const obj = back.get();
back.add('11');
back.add(11);

//
//

const names = ['Alice', 'Bob', 'Eve'];
names.forEach(n => n.toLocaleUpperCase());

//
// noImplicitAny, strictNullChecks

const fn = (obj1: { aa: string; bb?: string }) => {
  obj1.bb?.toLocaleUpperCase();
  obj1.bb!.toLocaleUpperCase();
};

const fn2 = (aa: string | null) => {
  aa?.toLocaleUpperCase();
  aa!.toLocaleUpperCase();
};

//
//

const myCanvas = document.querySelector('.myCanvas') as HTMLCanvasElement;
const myCanvas2 = <HTMLCanvasElement>document.getElementById('myCanvas');

//
//

let bb = 'aaa';

let bb22: 'aaa' = 'aaa';
bb22 = 'aaa';
bb22 = 'ccc';

//
//

const obj3 = { counter: 0 };
obj3.counter = 1;
obj3.counter = '1';

//
//

const data = { method: 'GET' };
const data2 = { method: 'GET' as 'GET' };
const data3 = { method: 'GET' } as const;

//
//

const anotherHundred = 100n;
const anotherHundred2: bigint = 100n;

//
//

type Fish = { swim: () => void };
type Bird = { fly: () => void };

const fn3 = (pet: Fish | Bird): pet is Fish => {
  return (pet as Fish).swim !== undefined;
};

/* Сужение Finish */
