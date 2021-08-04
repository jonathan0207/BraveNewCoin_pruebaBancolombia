import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { RequestService } from 'app/services/request.service';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent implements OnInit {
  list: any[] = [];
  form = this.fb.group({
    value: new FormControl({}, Validators.min(1)),
    criptomoneda1: new FormControl(),
    criptomoneda2: new FormControl(),
    result: new FormControl({ value: 0, disabled: true }),
  });

  constructor(
    private _request: RequestService,
    private fb: FormBuilder) {
    this._request.getAllListCoins()
      .subscribe((resp: []) => this.list = resp)
  }

  ngOnInit(): void {
  }

  reverseValue() {
    const newValue = this.form.value.criptomoneda1
    this.form.controls['criptomoneda1'].setValue(this.form.value.criptomoneda2)
    this.form.controls['criptomoneda2'].setValue(newValue)
    this.onSubmit()
  }

  onSubmit() {
    console.log(this.form.value);
    const coin1 = this.form.value.criptomoneda1
    const coin2 = this.form.value.criptomoneda2
    const value = this.form.value.value
    const result = (value * coin1) * coin2
    this.form.controls['result'].setValue(result)
  }
}
