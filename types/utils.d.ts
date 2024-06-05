declare type Nullable<T> = T | null
declare type Recordable<T = any> = Record<string, T>
declare interface ReadonlyRecordable<T = any> {
  readonly [key: string]: T
}
