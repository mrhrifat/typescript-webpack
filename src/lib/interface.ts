// Interface to create class
export default interface ImamInterface {
  id: number | string;
  readonly name: string;
  readonly country: string;
  readonly age: number;

  // seeImam return void
  seeImam(): void;

  // Return private property
  seeMajhab(): string;
}
