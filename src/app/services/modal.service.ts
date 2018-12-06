import { Injectable } from '@angular/core';
import { ModalComponent } from '../modal/modal.component';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';



@Injectable()
export class ModalService {

  constructor(private ModalService: BsModalService) { }

  modalRef: BsModalRef;

 
    openModal(text: string) {
        this.modalRef = this.ModalService.show(ModalComponent);
        this.modalRef.content.text = text;
    }
 
}