import { Component, OnInit } from '@angular/core';
import { NameService } from './name.service';
import { ToastrService } from 'ngx-toastr';
import { INameObject as NameObject } from '../models/Name/Name';

@Component({
  selector: 'app-name-component',
  templateUrl: './name.component.html'
})

export class NameComponent implements OnInit {
    firstName: string;
    lastName: string;

    constructor(private nameService: NameService, private _toastr: ToastrService) {
    }

    ngOnInit() {
        this.refreshName();
    }

    refreshName() {
        this.firstName = "";
        this.lastName = "";
    }

    onSubmitName() {
        if (this.firstName && this.firstName.trim().length != 0 && this.lastName && this.lastName.trim().length != 0) {
            let nameObject: NameObject = {
                firstName: this.firstName,
                lastName: this.lastName
            };

            this.nameService.submitName(nameObject).subscribe(
                success => {
                    this._toastr.success("Create the JSON file successfully, please check the folder.");
                    this.refreshName();
                },
                error => {
                    console.log("error");
                    if (error.error === null) {
                        if (nameObject.firstName && nameObject.lastName) {
                            this._toastr.error(error.message);
                        } else {
                            this._toastr.error("Please provide required name details");
                        }
                    } else {
                        this._toastr.error(error.error);
                    }
                }
            );
        } else {
            this._toastr.error("Please provide required name details");
            return;
        }
    }
}
