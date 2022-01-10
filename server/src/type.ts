export type TResult = {
  data : TData
  status : number
}

type TData = {
    message : object
}

export type TBody = {

}

export type TDataResult = {
    result : Tres
}

type Tres = {
    data : {
        id: number,
        idLeague: number,
        leagueName: string,
        start: number,
        end: number
}
}

export type TError = {
    error: string
}

export type TGet = {
    error?: TError,
    result?: Tres
}