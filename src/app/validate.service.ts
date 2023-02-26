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
            field.includes("                   ")) reject(`El campo ${name} está vacío.`);
            else resolve(`El campo ${name} es válido.`);
        })
    }
    minor(field: string, name: string = "", number: number = 6) {
        return new Promise((resolve, reject) => {
            if(field.length >= number) resolve(`El campo ${name} es válido.`);
            else reject(`El campo ${name} permite un mínimo de ${number} letras.`);
        })
    }
    bigger(field: string, name: string = "", number: number = 10) {
        return new Promise((resolve, reject) => {
            if(field.length <= number) resolve(`El campo ${name} es válido.`);
            else reject(`El campo ${name} permite un máximo de ${number} letras.`);
        })
    }
}