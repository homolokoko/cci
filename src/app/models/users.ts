import { notes } from "./notes";

export interface Users{
    id:number;
    name:string;
    birthDate:Date;
    avatar:string;
    bio:string;
    note:notes[];
}