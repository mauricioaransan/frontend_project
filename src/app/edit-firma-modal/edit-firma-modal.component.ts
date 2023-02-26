import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ServicesService} from "../services.service";
import {Firma} from "../firma";
import {faCloudArrowUp} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-edit-firma-modal',
  templateUrl: './edit-firma-modal.component.html',
  styleUrls: ['./edit-firma-modal.component.css']
})
export class EditFirmaModalComponent implements OnInit {

  /**
   * Icon
   */
  update = faCloudArrowUp;

  /**
   * Input Since Parent Component
   */
  @Input() id:number;

  /**
   * Output to Parent Component (event Emit)
   */
  @Output() changeState = new EventEmitter<string>();

  /**
   * Variable
   */
  firma:Firma = new Firma();

  constructor(private FirmaServices:ServicesService) { }


  ngOnInit(): void {
  }

  /**
   * When change ID, fetch FirmaByID
   */
  ngOnChanges() {
    if(this.id !== undefined){
      this.getFirmaByID(this.id)
    }
  }

  /**
   * Get Firma By ID
   * @param id
   */
  getFirmaByID(id:number){
    this.FirmaServices.getFirmaByID(id).subscribe(
      data => {
        this.firma = data;
        //Solución Momentanea al problema de inputType = file (recibiendo un string)
        //me limpia los valores de nuevo al guardar
        //tengo que hacerlos requerido en el EDIT
        this.firma.certificado_digital = '';
        this.firma.ruta_rubrica = '';
      },error => console.log(error)
    );
  }

  /**
   * Event Submit from Form
   */
  onSubmit(){
    this.FirmaServices.updateFirma(this.id,this.firma).subscribe(data => {
      this.editState('update')
    },error => console.log(error));
  }

  /**
   * Emit info To Parent Component To refresh Table
   * @param value
   */
  editState(value:string){
    this.changeState.emit(value)
  }


}
