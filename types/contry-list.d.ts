declare module 'country-list' {
    export interface Country {
      code: string;
      name: string;
    }
  
    export function getName(code: string): string;
    export function getCode(name: string): string;
    export function getCodes(): string[];
    export function getNames(): string[];
    export const countries: Country[];
  }
  