import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Globals {
  cash = [
    { id: 1, tipo: "Billete", cantidad: 2, denominacion: 1000 },
    { id: 2, tipo: "Billete", cantidad: 5, denominacion: 500 },
    { id: 3, tipo: "Billete", cantidad: 10, denominacion: 200 },
    { id: 4, tipo: "Billete", cantidad: 20, denominacion: 100 },
    { id: 5, tipo: "Billete", cantidad: 30, denominacion: 50 },
    { id: 6, tipo: "Billete", cantidad: 40, denominacion: 20 },
    { id: 7, tipo: "Moneda", cantidad: 50, denominacion: 10 },
    { id: 8, tipo: "Moneda", cantidad: 100, denominacion: 5 },
    { id: 9, tipo: "Moneda", cantidad: 200, denominacion: 2 },
    { id: 10, tipo: "Moneda", cantidad: 300, denominacion: 1 },
    { id: 11, tipo: "Moneda", cantidad: 100, denominacion: 0.5 },
  ]
}
