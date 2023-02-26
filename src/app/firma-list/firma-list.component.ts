import {Component, OnInit, SimpleChanges} from '@angular/core';
import {Firma} from "../firma";
import {ServicesService} from "../services.service";
import { faPen,  faTrash, faEllipsisV, faFileExcel } from '@fortawesome/free-solid-svg-icons'
import * as XLSX from "xlsx";

@Component({
  selector: 'app-firma-list',
  templateUrl: './firma-list.component.html',
  styleUrls: ['./firma-list.component.css']
})
export class FirmaListComponent implements OnInit {

  /**
   * Icons
   */
  pen       = faPen;
  garbage   = faTrash;
  circle    = faEllipsisV;
  excel     = faFileExcel;

  /**
   * Search Value
   */
  inputValue:String = '';


  /**
   * ArrayList Firmas
   */
  firmaFiltrado: Firma[];
  firma: Firma[];

  /**
   * Firma Value to EDIT
   */
  id_item:number;


  constructor( private firmaServices:ServicesService) { }

  /**
   * GetAllFirmas from DB on Init Component
   */
  ngOnInit(): void {
    this.getFirmas()
  }

  /**
   * Get the Filtered Firma
   */
  public searchFirma(){
    let valorInput = this.inputValue.toLowerCase()
    if(this.inputValue === '') {
      this.getFirmas();
    }else{
      this.firmaFiltrado = this.firma.filter(firmaFilter => {
         let filtroRS = firmaFilter.razon_social.toLowerCase()
         let filtroRL = firmaFilter.representante_legal.toLowerCase()
         let filtroTF= firmaFilter.tipo_firma.toLowerCase()
         let filtroEA = firmaFilter.empresa_acreditadora.toLowerCase()
        if (filtroRS.includes(valorInput) || filtroRL.includes(valorInput) || filtroTF.includes(valorInput) || filtroEA.includes(valorInput) ){
          return firmaFilter
        }else{
          return true
        }
      });
    }

  }

  /**
   * Get All Firmas from API
   * @private
   */
  private getFirmas(){
    this.firmaServices.getAllFirmaList().subscribe(
      data => {
        this.firmaFiltrado = data
        this.firma = data
      }
    )
  }

  public eventSinceChild(value: String){
    this.getFirmas();
  }

  /**
   * Set ID_ITEM to EditFirma
   * @param id
   */
  public  editItem(id:number){
    this.id_item = id
  }

  /**
   * Delete Firma
   * @param id
   */
  public deleteItem(id:number){
    this.firmaServices.deteleFirmaById(id).subscribe(
      data => {
        this.getFirmas();
      }
    )
  }


  /**
   * Method to generate and download Excel File
   */
  name = 'Firmas.xlsx';
  exportToExcel(): void {
    let element = document.getElementById('firmas_table');
    const worksheet: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);

    const book: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(book, worksheet, 'Sheet1');

    XLSX.writeFile(book, this.name);
  }
}
