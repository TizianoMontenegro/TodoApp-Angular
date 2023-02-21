import { Injectable } from '@angular/core';

@Injectable()

export class ValidateService {
    constructor() { }
    
    null(field: string, name: string = "") {
        return new Promise((resolve, reject) => {
            if(field == "" || 
            field == " " || 
            field.includes("  ") || 
            field.includes("   ") || 
            field.includes("    ") || 
            field.includes("     ") || 
            field.includes("      ") || 
            field.includes("       ") || 
            field.includes("        ") || 
            field.includes("         ") || 
            field.includes("          ") || 
            field.includes("           ") || 
            field.includes("            ") || 
            field.includes("             ") || 
            field.includes("              ") || 
            field.includes("               ") || 
            field.includes("                ") || 
            field.includes("                 ") || 
            field.includes("                  ") || 
            field.includes("                   ")) reject(`El campo está vacio.`);
            else resolve(`El campo es valido.`);
        })
    }
    minor(field: string, name: string, number: number = 6) {
        return new Promise((resolve, reject) => {
            if(field.length >= number) resolve(`El campo es valido.`);
            else reject(`El campo permite un minimo de ${number} letras.`);
        })
    }
    bigger(field: string, name: string, number: number = 10) {
        return new Promise((resolve, reject) => {
            if(field.length <= number) resolve(`El campo es valido.`);
            else reject(`El campo permite un maximo de ${number} letras.`);
        })
    }
}