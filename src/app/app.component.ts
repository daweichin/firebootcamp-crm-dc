import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private companyService: CompanyService){}

  ngOnInit(): void {
    this.companyCount$=this.companyService.getCompanies()
      .pipe(
        map(c => c.length)
      )
  }
  title = 'firebootcamp-crm';

  companyCount$: Observable<number>;



  keyPressed(event) {
  console.log("y")
  this.title = event.target.value;
  }
}
