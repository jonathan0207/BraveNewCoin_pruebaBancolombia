import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { RequestService } from '../../services/request.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
    test: Date = new Date();
    focus: any;
    focus1: any;

    loginForm = this.fb.group({
        username: ['', [Validators.required]],
        password: ['', [Validators.required]],
    });

    constructor(
        private fb: FormBuilder,
        private router: Router,
        private _request: RequestService
    ) { }

    ngOnInit() { }

    onSubmit() {
        this._request.loginUser(this.loginForm.value)
            .subscribe((r) => {
                if (r !== false)
                    this.router.navigate(['/home'])
            })
    }
}
