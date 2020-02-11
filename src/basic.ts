declare module Basic {

    export function screen(val: number): void {
    }

    export function color(val1:number, val2:number): void {

    }

    export function key(s: string) {

    }

  export function print(text: string): void {
    console.log("PRINT: " + text);
  }

  export function cls(): void {
    console.log("CLS");
  }

  export function val(value: any): any {
      return value;
  }

}
