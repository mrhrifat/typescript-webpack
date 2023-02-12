// Interface to create class
export default interface ImamInterface {
  id: number | string;
  name: string;
  country: string;
  age: number;

  // seeImam return void
  seeImam(): void;
}
