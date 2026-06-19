import { Component, EventEmitter, Input, OnChanges, SimpleChanges, Output, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxTextBoxModule, DxSelectBoxModule, DxButtonModule, DxValidationGroupModule, DxValidatorModule, DxValidationGroupComponent } from 'devextreme-angular';
import { AddressBookService, Contact } from '../address-book';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [CommonModule, DxTextBoxModule, DxSelectBoxModule, DxButtonModule, DxValidationGroupModule, DxValidatorModule],
  templateUrl: './modal.html',
  styleUrls: ['./modal.css'] 
})
export class ModalComponent implements OnChanges {
  @Input() contactData!: Contact;
  @Input() isNew: boolean = false;
  
  @Output() saveEmit = new EventEmitter<Contact>();
  @Output() cancelEmit = new EventEmitter<void>();

  @ViewChild('validationGroup', { static: false }) validationGroup!: DxValidationGroupComponent;

  formData!: Contact;
  isEditing: boolean = false;
  stateList: string[] = [];

  constructor(private addressBookService: AddressBookService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.stateList = this.addressBookService.getStates();
    this.isEditing = this.isNew;
    
    if (this.validationGroup && this.validationGroup.instance) {
      this.validationGroup.instance.reset();
    }
    
    if (this.contactData) {
      this.formData = JSON.parse(JSON.stringify(this.contactData));
    } else {
      this.formData = {
        name: '', email: '', phone: '',
        address: { street: '', state: '', postcode: '' },
        description: ''
      };
    }
  }

  enableEditing(): void { 
    this.isEditing = true; 
  }

  onSaveClick(): void {
    const validation = this.validationGroup.instance.validate();
    if (validation.isValid) {
      this.saveEmit.emit(this.formData);
    }
  }

  onCancelClick(): void { 
    this.cancelEmit.emit(); 
  }
}