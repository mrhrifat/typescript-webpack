export default class Imam {
  constructor(
    readonly id: number | string,
    readonly name: string,
    readonly age: number,
    readonly country: string
  ) {}

  seeImam(): void {
    console.log(`Imam ${this.name} is born in ${this.country}`);
  }
}
