// 定义一个接口，用于限制Person对象的具体类型，分别暴露出去
export interface PersonInter {
    id:string,
    name:string,
    age:number
}

// 一个自定义类型
export type Persons = PersonInter[]