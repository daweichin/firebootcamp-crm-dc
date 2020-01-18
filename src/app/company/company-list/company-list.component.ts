import { Component, OnInit } from "@angular/core";
import { Company } from "../company";
import { CompanyService } from "../company.service";
import { Observable } from "rxjs";

@Component({
  selector: "fbc-company-list",
  templateUrl: "./company-list.component.html",
  styleUrls: ["./company-list.component.scss"]
})
export class CompanyListComponent implements OnInit {

  companies$: Observable<Company[]>;
  companyService: CompanyService;

  constructor(companySvc: CompanyService) {
    this.companyService = companySvc;
  }

  ngOnInit() {
this.loadCompanies();

  }

  loadCompanies() {
    this.companies$ = this.companyService.getCompanies();
  }

  deleteCompany(company: Company) {
    this.companyService.deleteCompany(company.id)
  }
}
