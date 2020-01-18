import { Component, OnInit } from '@angular/core';
import { Company } from '../company';
import { CompanyService } from '../company.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrls: ['./company-edit.component.scss']
})
export class CompanyEditComponent implements OnInit {

  companyId: number;
  isNewCompany: boolean;
  company = {} as Company; // we can do this because it's an interface, casting
  companyForm: FormGroup;

  constructor(
private router: Router,
private activatedRoute: ActivatedRoute,
private companyService: CompanyService,
private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    this.companyId = parseInt(this.activatedRoute.snapshot.params['id'])

    this.isNewCompany = this.companyId === 0;

    this.buildForm();

    if(!this.isNewCompany){
      this.getCompany();
    }
}

getCompany():void {
  this.companyService.getCompany(this.companyId)
    .subscribe(company => {
      this.companyForm.patchValue(company);
    })};

buildForm() {
  this.companyForm = this.formBuilder.group(
    {
      name: ['', Validators.required],
      phone: [''],
      email: ['']
    }
  )
}

saveCompany(): void{
  if(this.isNewCompany){
    // Add Company
    this.companyService
    .addCompany(this.companyForm.value)
  } else {
    //build a new object using the spread operator
    const currentCompany: Company = {...this.companyForm.value, id: this.companyId}
   this.companyService.updateCompany(currentCompany)
  }
  this.router.navigateByUrl('/company/list')
  }

}


