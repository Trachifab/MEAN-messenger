import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'

})
export class SigninComponent implements OnInit{

    myForm: FormGroup;

    onSubmit(){
        this.myForm.reset();
    }

    ngOnInit() {
        this.myForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("^[^\s@]+@[^\s@]+\.[^\s@]{2,}$")
            ]),
            password: new FormControl(null, Validators.required),
        });
    }
}