import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    test: Date = new Date();
    focus: any;
    focus1: any;
    list: [];
    registerForm = this.fb.group({
        name: ['', [Validators.required]],
        lastname: ['', [Validators.required]],
        username: ['', [Validators.required]],
        preferredCurrency: [''],
        password: ['', [Validators.required, Validators.maxLength(8)]],
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private _request: RequestService
    ) {
        this._request.getAllListCoins().subscribe((resp: []) => this.list = resp)
    }

    ngOnInit() {}

    onSubmit() {
        this._request.registerUser(this.registerForm.value)
            .subscribe((r) => {
                if (r !== false)
                    this.router.navigate(['/login'])
            });
    }
}
