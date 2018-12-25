declare type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> {

}

interface ClassConcatFn {
  (...classes: ClassValue[]): string;
}

declare var classConcat: ClassConcatFn;

export default classConcat;