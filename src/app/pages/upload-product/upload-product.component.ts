import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss'],
})
export class UploadProductComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      brand_name: [''],
      model_name: [''],
      price: [0, Validators.required],
      stock: [0, Validators.required],
      sizes: [''],
      colors: [],
      discount: [0, Validators.required],
      category: ['', Validators.required],
      description: [''],
      images: [''],
      active: [true, Validators.required],
      quantity: [0, Validators.required],
    });
  }

  onSubmit(formValue: any): void {
    console.log(formValue);
  }
  ngOnInit(): void {}
}
