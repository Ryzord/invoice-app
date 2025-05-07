import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
import { Item } from '../models/item';
;

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  remove(id: number) {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();

    return {... this.invoice, total};
  }
  calculateTotal() {
    // una forma de hacerlo:
    // let total = 0;
    // this.invoice.items.forEach(item => total += item.price * item.quantity);
    // return total;

    // otra forma de hacer el calculo del total:
    return this.invoice.items.reduce((accumulator, item) => accumulator + (item.price * item.quantity), 0)
  }
}
