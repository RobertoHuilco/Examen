import { Person } from "./Persona";


export interface Client extends Person {
    direccion: string,
    edad: number
}