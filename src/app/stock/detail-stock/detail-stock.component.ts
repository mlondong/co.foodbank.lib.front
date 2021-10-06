import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContributionPK } from 'src/app/model/dtos/contributionPK';
import { ProductPK } from 'src/app/model/dtos/productPK';
import { Stock } from 'src/app/model/stock/stock';
import { ErrorService } from 'src/app/services/error.service';
import { ProductService } from 'src/app/services/product.service';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-detail-stock',
  templateUrl: './detail-stock.component.html',
  styleUrls: ['./detail-stock.component.css']
})
export class DetailStockComponent implements OnInit {

  //Defined variables
  sub: Subscription;
  id: string;
  stockResponse: any;
  currentDate: any;

  isReady: boolean = true;
  productDesciption: any;
  productResponse: any[] = [];
  typeProduct: number = 0;
  errorDialog1: string = "Error the quantity defined is different that in contribution.";
  errorDialog2: string = "You must select a product available to update.";



  //Constructor
  constructor(private errorService: ErrorService,
    private productService: ProductService,
    private stockService: StockService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    this.sub = this.route.params.subscribe(params => {
      let today = new Date();
      this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');


      this.id = params['id'];
      if (this.id) {
        this.stockService.findById(this.id).subscribe(
          (response: any) => {
            if (response.length != 0) {
              this.stockResponse = response;
              this.productDesciption = this.stockResponse.contribution.description.substring(0, 5);
              this.getAllProducts();
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

  //Method to update stock
  public toUpdateStock(form: NgForm): void {
    const stock = this.buildStock(form);
    let flag: any  = this.validateObject(stock);

    if (flag === true) {
        this.stockService.updateStock(this.stockResponse.id, stock).subscribe(
        (response: any) => {
          this.stockResponse = response;
        }, (error: HttpErrorResponse) => {
          console.log(error.message); //aca debe ser un evento del interceptor
        }
      );
    }
    this.isReady=true;
  }


  //Method to validateObject
  private validateObject(stock: any): any {
    const valueQauntity = stock.quantity.toString();
    const valueStockProduct = stock.product.product.toString();

    if (this.stockResponse.contribution.numOfPackage != null) {
      if (!valueQauntity.match(this.stockResponse.contribution.numOfPackage)) {
        this.isReady =false;
        this.errorService.openDialog(this.errorDialog1);
      }
    }

    if (valueStockProduct === "0") {
      this.isReady =false;
      this.errorService.openDialog(this.errorDialog2);
    }
    return this.isReady;
  }

  //Method to build an Stock
  public buildStock(info: any): Stock {
    let contribution = new ContributionPK(info.contribution);
    let product = new ProductPK(info.product);
    return new Stock(this.currentDate, info.quantity, contribution, product);
  }

  //Method to get All Products
  public getAllProducts(): void {
    this.productService.searchByName(this.productDesciption).subscribe(
      (response: any[]) => {
        this.productResponse = [];
        this.productResponse = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }



}
