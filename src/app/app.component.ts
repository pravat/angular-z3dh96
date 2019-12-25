import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray } from "@angular/forms";
import { Address, Country } from "./model";
import { CountryService } from "./country.service"
@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  formObject: FormGroup;
  countries: Array<Country>;
  constructor(
    private fb: FormBuilder,
    private countryService: CountryService
    ) {
      this.countries = this.countryService.getCountries();
    }

  getForm(data: Address): FormGroup {
    return this.fb.group({
      Description: [data && data.Description, []],
      Address1: [data && data.Address1, []],
      CountryId: [data && data.CountryId, []],
      PostalCode: [data && data.PostalCode, []]
    });
  }

  ngOnInit() {
    
    this.formObject = this.fb.group({
      addresses: this.fb.array([
        this.getForm({
          Description: "Head Office",
          Address1: "11 Salamander Crt",
          CountryId: 2,
          PostalCode: "L6A0B8"
        })
      ])
    });
  }

  addAddress(){
    const addFormArray = this.formObject.get('addresses') as FormArray;
    addFormArray.push(this.getForm(null));
  }
}
