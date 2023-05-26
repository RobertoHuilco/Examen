import { Person } from "./Persona";

export interface Vendedor extends Person {
    seccion: string,
    celular: number
}