export  type TTitle = {
  title? : string,
  user? : string
}

type TElement = {
  [index:number]: any
}
export type TSet = {
  [index:number]: any,
  add(value:any): TElement,
  has(value:any): boolean,
  delete(value:any): void,
  genereteKey(): number,
  isEqual(element:any,value:any):boolean
}