import { formatDate } from '@angular/common';
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/model/product/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.css']
})
export class CardProductComponent implements OnInit {

  //Variables defined
  responseProduct: any=[];
  product: Product;
  option: number;
  isShowForm: boolean;
  labelForm: any;
  currentDate: any;
  requestProduct: Product;
  typeProduct: any;
  listTypeProducts: string[];

  isPerishable: boolean = false;
  isSemiPerishable: boolean = false;


  //Constructor
  constructor(private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.listTypeProducts = ["NONPERISHABLE", "SEMIPERISHABLE", "PERISHABLE"];
    this.requestProduct = <Product>{};
    //this.responseProduct = [];
    let today = new Date();
    this.currentDate = formatDate(today, 'yyyy-MM-dd', 'en-US');
    this.listAll();
  }


  //Method to list all products.
  public listAll(): void {
    this.productService.findAll().subscribe(
      (response: Product[]) => {
        this.responseProduct = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }



  //Method to select  find
  public onFind(form: NgForm): void {
    this.responseProduct = [];
    switch (this.option) {
      case 1: this.findById(form); break;
      case 2: this.seachByName(form); break;
    }
  }

  //Method to find by Id
  public findById(form: NgForm): void {
    let id: any = form.controls.usid.value;

    this.productService.findById(id).subscribe(
      (response: any) => {
        this.responseProduct.push(response);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }



  //Method to  seachByName
  public seachByName(form: NgForm): void {

    let name: any = form.controls.usid.value;
    this.productService.searchByName(name).subscribe(
      (response: any[]) => {
        this.responseProduct= response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


  public onChange(value) {
    this.isPerishable = false;
    this.isSemiPerishable = false;
    this.typeProduct = value;

    if (this.typeProduct == 'PERISHABLE') {
      this.isPerishable = true;
    } else if (this.typeProduct == 'SEMIPERISHABLE') {
      this.isSemiPerishable = true;
    }
  }


  //Method to create an Product
  public create(form: NgForm): void {
    const product = this.buildProduct(form);
    const type = this.getTypeProduct(form);

    this.productService.create(product, type).subscribe(
      (response: any) => {
        this.product = response;
        this.responseProduct.push(this.product);
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public getTypeProduct(data: any) {
    return data.type;
  }

  //Method to update Product
  public buildProduct(form: any): Product {

    if (this.typeProduct == 'NONPERISHABLE' || this.typeProduct == 'SEMIPERISHABLE') {
      form.expectedStorageLife = '0';
      form.storageTemperature = '0';
    }
    return new Product(form.name, form.description, form.brand,
      form.dateExpiraton, form.expectedStorageLife, form.storageTemperature,
      form.requiredRefrigeration);
  }


  //Method to show product information
  public showInfo(id: string): void {
    this.productService.findById(id).subscribe(
      (response: Product) => {
        this.requestProduct = response;
      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }


  //Method to create an Product
  public update(form: NgForm): void {
    let product = this.buildProduct(form);
    const id = this.getproductId(form);

    if (product.expectedStorageLife === undefined || product.storageTemperature === undefined) {
      product.expectedStorageLife = '0';
      product.storageTemperature = '0';
    }

    this.productService.update(id, product).subscribe(
      (response: any) => {
        this.product = response;
        const found = this.foundObjectInArray(id);
        this.removeObjectInArray(found);
        this.responseProduct.push(this.product);

      }, (error: HttpErrorResponse) => {
        console.log(error.message);
      }
    );
  }

  public foundObjectInArray(idToSearch: any): any {
    return this.responseProduct.find(e => e.id === idToSearch);
  }

  public removeObjectInArray(objFound: any): void {
    const index: number = this.responseProduct.indexOf(objFound);
    if (index !== -1) {
      this.responseProduct.splice(index, 1);
    }
  }


  public getproductId(data: any): string {
    return data.id;
  }

  //Change form to search
  public changeForm(val: any): void {

    this.option = val;

    switch (this.option) {
      case 1: this.setSearchById(); break;
      case 2: this.setSearchByName(); break;
    }
  }


  public setSearchById() {
    this.isShowForm = true;
    this.labelForm = "By ID";

  }

  public setSearchByName() {
    this.isShowForm = true;
    this.labelForm = "By NameProduct";
  }

}
