import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Firma} from "../firma";
import {ServicesService} from "../services.service";
import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-add-firma-modal',
  templateUrl: './add-firma-modal.component.html',
  styleUrls: ['./add-firma-modal.component.css']
})
export class AddFirmaModalComponent implements OnInit {

  /**
   * Icon
   */
  update = faCloudArrowUp;

  /**
   * Output to Parent Component (event Emit)
   */
  @Output() changeState = new EventEmitter<string>();

  /**
   * Object Firma
   */
  firma : Firma = new Firma();

  constructor(private firmaServices : ServicesService) { }

  ngOnInit(): void {
  }

  /**
   * Event Submit from Form
   */
  onSubmit(){
    this.saveFirma();
  }

  /**
   * Event Close Modal
   */
  onClose(){
    this.firma= new Firma();
  }

  /**
   * ADD into DB new Firma
   */
  saveFirma(){
    this.firmaServices.addFirma(this.firma).subscribe(data => {
      this.firma = new Firma();
      this.addNewState('refresh')
    }, error => console.log(error))
  }

  /**
   * Emit info To Parent Component To refresh Table
   * @param value
   */
  addNewState(value:string){
    this.changeState.emit(value)
  }


}
