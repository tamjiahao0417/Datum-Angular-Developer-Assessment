import { Injectable } from '@angular/core';

export interface Contact {
  id?: string;
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    state: string;
    postcode: string;
  };
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
  private contacts: Contact[] = [];
  
  private stateList: string[] = [
    'Johor', 'Kedah', 'Kelantan', 'Melaka', 'Negeri Sembilan', 
    'Pahang', 'Perak', 'Perlis', 'Penang', 'Sabah', 'Sarawak', 
    'Selangor', 'Terengganu', 'Kuala Lumpur'
  ];

  getStates(): string[] { return this.stateList; }
  getContacts(): Contact[] { return this.contacts; }

  addContact(contact: Contact): void {
    contact.id = Date.now().toString();
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(id: string): void {
    this.contacts = this.contacts.filter(c => c.id !== id);
  }
}