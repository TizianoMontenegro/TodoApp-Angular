import { Injectable } from '@angular/core';

@Injectable()

export class ValidateService {
    constructor() { }
    
    null(field: string, name: string = "") {
        return new Promise((resolve, reject) => {
            if(field == "" || field == " " || field.includes("  ")) reject(`el campo ${name} no es valido`);
            else resolve(`El campo ${name} es valido1`);
        })
    }
    minor(field: string, name: string, number: number = 6) {
        return new Promise((resolve, reject) => {
            if(field.length >= number) resolve(`El campo ${name} es valido2`);
            else reject(`el campo ${name} no es valido2`);
        })
    }
    bigger(field: string, name: string, number: number = 20) {
        return new Promise((resolve, reject) => {
            if(field.length <= number) resolve(`El campo ${name} es valido3`);
            else reject(`el campo ${name} no es valido3`);
        })
    }
}