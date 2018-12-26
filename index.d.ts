declare type ClassValue = string | number | ClassDictionary | ClassArray | undefined | null | false;

interface ClassDictionary {
  [id: string]: boolean | undefined | null;
}

interface ClassArray extends Array<ClassValue> { }

type ClassConcatFn = (...classes: ClassValue[]) => string;

type ClassConcatExport = ClassConcatFn & { default: ClassConcatFn };

declare const classConcat: ClassConcatExport;

export = classConcat;

export as namespace classConcat;