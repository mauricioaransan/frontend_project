import { Component, OnInit } from '@angular/core';
import { faBook, faPenNib, faFileSignature, faGear, faCity} from '@fortawesome/free-solid-svg-icons'


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  /**
   * Icons to SideBar
   */
  book    = faBook;
  pen     = faPenNib;
  file    = faFileSignature;
  gear    = faGear;
  city    = faCity;

  iconsArray:any  = [this.pen,this.book,this.city,this.file,this.gear]

  constructor() { }

  ngOnInit(): void {
  }



}
