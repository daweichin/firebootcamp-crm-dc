import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Company } from '../company';


@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrls: ['./company-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyTableComponent implements OnInit {

  constructor() { }

  @Input() companies: Company[];

  @Output() companyDeleteClicked = new EventEmitter<Company>();

  ngOnInit() {
  }

  deleteCompany(company: Company){
    this.companyDeleteClicked.emit(company)
  }
}
