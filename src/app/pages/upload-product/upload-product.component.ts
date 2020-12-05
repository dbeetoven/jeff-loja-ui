import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-upload-product',
  templateUrl: './upload-product.component.html',
  styleUrls: ['./upload-product.component.scss'],
})
export class UploadProductComponent implements OnInit {
  form: FormGroup;
  sizes = [
    { description: 'XS', value: 'xs' },
    { description: 'S', value: 's' },
    { description: 'M', value: 'm' },
    { description: 'L', value: 'l' },
    { description: 'XL', value: 'xl' },
  ];
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: ['', Validators.required],
      brand_name: [''],
      model_name: [''],
      price: [0, Validators.required],
      stock: [0, Validators.required],
      sizes: new FormArray([], Validators.required),
      description: [''],
      image: ['', Validators.required],
      active: [true, Validators.required],
    });
  }
  onCheckChange(event: any): void {
    const formArray: FormArray = this.form.get('sizes') as FormArray;
    if (event.target.checked) {
      formArray.push(new FormControl(event.target.value));
    } else {
      let i = 0;
      formArray.controls.forEach((ctrl: FormControl) => {
        if (ctrl.value === event.target.value) {
          formArray.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  handleFileSelect(event: any): void {
    const files = event.target.files;
    const file = files[0];

    if (files && file) {
      const reader = new FileReader();

      reader.onload = this._handleReaderLoaded.bind(this);

      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvt: any): void {
    const binaryString = readerEvt.target.result;
    this.form.patchValue({ image: btoa(binaryString) });
  }

  onSubmit(formValue: any): void {
    console.log(formValue);
  }
  ngOnInit(): void {}
}
