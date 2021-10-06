import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContributionPK } from 'src/app/model/dtos/contributionPK';
import { ProductPK } from 'src/app/model/dtos/productPK';
import { RequestContribution } from 'src/app/model/order/requestContribution';
import { Stock } from 'src/app/model/stock/stock';
import { ContributionService } from 'src/app/services/contribution.service';
import { ProductService } from 'src/app/services/product.service';
import { StockService } from 'src/app/services/stock.service';
import { VaultService } from 'src/app/services/vault.service';

@Component({
  selector: 'app-card-stock',
  templateUrl: './card-stock.component.html',
  styleUrls: ['./card-stock.component.css']
})
export class CardStockComponent implements OnInit {

  //Define variables
  responseStock: any[] = [];
  currentDate: any;
  responseContributions: any[] = [];
  responseProducts: any[] = [];
  responseProductsBck: any[] = [];

  typeProduct: number = 0;
  quantity: string = '';
  searchValue: string = '';
  idContribution: string = '';
  option: number;
  labelForm: any;


  //Constructor
  constructor(private stockService: StockService,
    private contributionService: ContributionService,
    private productService: ProductService
  ) { }


  ngOnInit(): void {
    this.listAll();
    let today = new Date();
    this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');
  }




  //Method to find the type of contribution in response stock
  public checkTypeContribution(id: string): string {
    const stock = this.responseStock.find(e => e.id === id);
    let type: any = {};
    if (stock.contribution.volume != null) {
      type = "General-Contribution";
    } else {
      type = "Detail-Contribution";
    }
    return type;
  }

  //Change form to search
  public changeForm(val: any): void {
    this.option = val;
    switch (this.option) {
      case 1: this.setSearchById(); break;
      case 2: this.setSearchByContributionId(); break;
      case 3: this.setSearchByProductId(); break;
      case 4: this.setSearchByProductName(); break;
    }
  }

  //Method to select  find
  public onFind(form: NgForm): void {
    let value: any = form.controls.usid.value;

    switch (this.option) {
      case 1: this.findById(value); break;
      case 2: this.findContributionId(value); break;
      case 3: this.findProductById(value); break;
      case 4: this.findProductName(value); break;
    }
  }


  public setSearchById() {
    this.labelForm = "By ID";
  }

  public setSearchByContributionId() {
    this.labelForm = "By Contribution ID";
  }

  public setSearchByProductId() {
    this.labelForm = "By Product ID ";
  }

  public setSearchByProductName() {
    this.labelForm = "By Product name";
  }



  //Method to create an Stock
  public create(form: NgForm): void {
    const stock = this.buildStock(form);
    this.stockService.createStock(stock).subscribe(
      (response: any) => {
        if (response.length != 0) {
          this.responseStock = []
          this.responseStock.push(response);
          this.cleanAll();
        }
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }

  //Method to create an Stock
  public update(form: NgForm, id: string): void {
    const stock = this.buildStock(form);
    this.stockService.updateStock(id, stock).subscribe(
      (response: any) => {
        this.responseStock = []
        this.responseStock.push(response);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }




  //Method to build an Stock
  public buildStock(info: any): Stock {
    let contribution = new ContributionPK(info.contribution);
    let product = new ProductPK(info.product);
    return new Stock(this.currentDate, info.quantity, contribution, product);
  }


  //Method to list All register in stock
  public listAll(): void {
    this.stockService.findAll().subscribe(
      (response: any[]) => {
        this.responseStock = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //Method to find by id stock
  public findById(id: string): void {
    this.stockService.findById(id).subscribe(
      (response: any) => {
        this.responseStock = [];
        this.responseStock.push(response);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //Method to find contribution in stock
  public findContributionId(contribution: string): void {
    this.stockService.findContributionInStock(contribution).subscribe(
      (response: any[]) => {
        this.responseStock = [];
        this.responseStock = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //Method to find product in stock
  public findProductById(product: string): void {
    this.stockService.findProductInStock(product).subscribe(
      (response: any[]) => {
        this.responseStock = [];
        this.responseStock = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  //Method to search product name in stock
  public findProductName(name: string): void {
    this.stockService.searchProduct(name).subscribe(
      (response: any[]) => {
        this.responseStock = [];
        this.responseStock = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }





  //Method to find All Products
  public findAllProducts(): void {

    this.productService.findAll().subscribe(
      (response: any[]) => {
        this.responseProducts = [];
        this.responseProducts = response;
        this.responseProductsBck = this.responseProducts;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );

  }


  //Method to find All Contributions
  public findAllContributions(): void {
    this.contributionService.findAll().subscribe(
      (response: any[]) => {
        if (response.length != 0) {
          this.responseContributions = [];
          this.responseContributions = response;
          let option = "InHouse";
          this.filterContributionsByStateInHouse(option);

        } else {
          this.responseContributions = [];
          this.responseContributions = response;

        }
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }



  //Method to find products in a all contributions in state InHouse
  public searchProdContributions(form: NgForm): void {
    let data: any = form.controls.product.value;
    //filter contributons by description
    this.filterContributions(data);

    //filter products by search
    this.filterProducts(data);
  }

  private filterContributions(data: any) {
    let resultontrib: any[] = this.responseContributions.filter(item => item.description.includes(data));
    this.responseContributions = [];
    this.responseContributions = resultontrib;
  }

  private filterProducts(data: any) {
    let resultProduct: any[] = this.responseProducts.filter(item => item.name.includes(data));
    this.responseProducts = [];
    this.responseProducts = resultProduct;
    console.log(this.responseProducts);
  }

  //Method to filter contributions only with Inhouse state
  public filterContributionsByStateInHouse(option: any): void {
    let filterState: any[] = this.responseContributions.filter(d => d.state.type === option);
    let filterIdContributionInStock: any[] = this.responseStock.map(obj => obj.contribution.id);
    let filter: any[] = filterState.filter(d => !filterIdContributionInStock.includes(d.id));

    this.responseContributions = [];
    this.responseContributions = filter;
  }



  //Method to clear search in contributions
  public clear(): void {
    this.cleanAll();
    this.findAllContributions();
    this.findAllProducts();
  }


  public cleanAll(): void {
    this.searchValue = '';
    this.idContribution = '';
    this.quantity = '';
    this.typeProduct = 0;
    this.findAllContributions();
    this.findAllProducts();
  }

  //Method to handle options selected
  public handleOptionContribution(idContrib: any): void {
    this.idContribution = idContrib;
  }

  public handleOptionQuantity(val: any): void {
    this.quantity = val;
  }

  public handleOptionProduct(descript: any): any {
    let value = descript.substring(0, 5);
    this.responseProducts = this.responseProductsBck;
    this.filterProducts(value);
  }

  //Method to reduce date 
  public reduceDate(date: any): string {
    return date.substring(0, 10);
  }

}
