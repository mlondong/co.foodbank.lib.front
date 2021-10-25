import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ErrorService } from 'src/app/services/error.service';
import { PackagedService } from 'src/app/services/packaged.service';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-card-packaged-detail',
  templateUrl: './card-packaged-detail.component.html',
  styleUrls: ['./card-packaged-detail.component.css']
})
export class CardPackagedDetailComponent implements OnInit {

  //Defined variables
  sub: Subscription;
  id: string;
  packagedResponse: any;
  currentDate: any;
  productResponse: any[] = [];
  product: any = '';
  detail_item='';

  //Constructor
  constructor(private errorService: ErrorService,
    private _servicepackaged: PackagedService,
    private _productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }



  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      let today = new Date();
      this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');


      this.id = params['id'];
      if (this.id) {
        this._servicepackaged.findById(this.id).subscribe(
          (response: any) => {
            if (response.length != 0) {
              this.packagedResponse = response;
            }
          }, (error: HttpErrorResponse) => {
            console.log(error.message);
          }
        );
      } else {
        console.log("Null in id");/// aca es un evento que deberia tomar el  interceptor.
      }
    });
  }

  //Method to update Packaged
  public toUpdatePackaged(form: NgForm): void {
    console.log(form);
  }

  //Method to search Product in contribution
  public searchProdContributions(event: any): void {
    let data = event.target.value;
    this._productService.searchByName(data).subscribe(
      (response: any[]) => {
        if (response.length != 0) {
          this.productResponse = response;
        }
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //Method to set product
  public handleOptionProduct(id: any, name: any, brand:any): void {
    document.getElementById("find-message-form")?.click();
    this.product = name+' - '+brand + ' - ID - '+id;
  }


}
