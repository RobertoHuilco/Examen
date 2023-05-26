//Clockwing
import { Client } from "./entity/Cliente";
import { Vendedor } from "./entity/Vendedor";


let client: Client[] = [];
let vendedor: Vendedor[] = [];


enum Course {
    Mujer = "Mujer",
    Hombre = "Hombre",
    Nino = "Niño"
}


function addVendedor(): void {
    let currentVendedor: Vendedor =
    {
        dni: readFromHtml("vendedor_dni"),
        fullName: readFromHtml("vendedor_fullname"),
        seccion: readFromHtml("vendedor_area"),
        celular: parseInt(readFromHtml("vendedor_celular"))
    }
    vendedor.push(currentVendedor);
    console.table(vendedor);
    initSelect();
    document.write("Los datos del vendedor Son: ");
document.write("Su cédula es: "+currentVendedor.dni, "  Su nombre es: " +currentVendedor.fullName
, "  La seccion de la poblacion al que el vende es: " +currentVendedor.seccion
, "  Su celular es: " +currentVendedor.celular);
}
function addClient(): void {
    let currentClient: Client =
    {
        dni: readFromHtml("cliente_dni"),
        fullName: readFromHtml("cliente_fullname"),
        direccion: readFromHtml("cliente_direccion"),
        edad: parseInt(readFromHtml("cliente_edad"))
    }
    client.push(currentClient);
    console.table(client);
    
    initSelect();
    //let currentClient = new currentClient(10, "Tercero");
    document.write("Los datos del cliente Son: ");
document.write("Su cédula es: "+currentClient.dni, "  Su nombre es: " +currentClient.fullName
, "  Su dirección es: " +currentClient.direccion
, "  Su edad es: " +currentClient.edad);
}

function readFromHtml(id: string): string {
    return (<HTMLInputElement>document.getElementById(id)).value;
}


function initSelect(): void {

    let vendedor_area = document.getElementById("vendedor_area") as HTMLSelectElement;

    document.querySelectorAll("#gradebook_course option").forEach(option => option.remove());
    let courses = Object.values(Course);
    courses.forEach(
        (value) => {
            let option = document.createElement("option");
            option.value = value;
            option.text = value;
            vendedor_area.add(option);
        }
    );

    

}
initSelect()

//Clockwing