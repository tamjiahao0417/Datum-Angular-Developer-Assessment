import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule, DxButtonModule, DxPopupModule } from 'devextreme-angular';
import { ModalComponent } from '../modal/modal';
import { AddressBookService, Contact } from '../address-book';
import { confirm } from 'devextreme/ui/dialog';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, DxDataGridModule, DxButtonModule, DxPopupModule, ModalComponent],
  templateUrl: './list.html',
  styleUrls: ['./list.css'] 
})
export class ListComponent implements OnInit {
  contacts: Contact[] = [];
  isPopupVisible: boolean = false;
  selectedContact!: Contact | null;
  isNewRecord: boolean = false;

  constructor(
    private addressBookService: AddressBookService,
    private cdr: ChangeDetectorRef 
  ) {}

  ngOnInit(): void { this.refreshGrid(); }

  refreshGrid(): void {
    this.contacts = [...this.addressBookService.getContacts()];
  }

  calculateFullAddress(rowData: Contact): string {
    return `${rowData.address.street || ''}, ${rowData.address.state || ''} ${rowData.address.postcode || ''}`;
  }

  openAddModal(): void {
    this.isNewRecord = true;
    this.selectedContact = null;
    this.isPopupVisible = true;
  }

  onRowClick(e: any): void {
    this.isNewRecord = false;
    this.selectedContact = e.data;
    this.isPopupVisible = true;
  }

  onDeleteClick(e: any, cellInfo: any): void {
    e.event.stopPropagation(); 
    
    let result = confirm("Are you sure you want to delete this contact?", "Confirm Delete");
    result.then((dialogResult: boolean) => {
      if (dialogResult && cellInfo.data.id) {
        this.addressBookService.deleteContact(cellInfo.data.id);
        this.refreshGrid();
        
        this.cdr.detectChanges(); 
      }
    });
  }

  handleSave(record: Contact): void {
    if (this.isNewRecord) {
      this.addressBookService.addContact(record);
    } else {
      this.addressBookService.updateContact(record);
    }
    this.isPopupVisible = false;
    this.refreshGrid();
  }

  handleCancel(): void {
    this.isPopupVisible = false;
  }
}