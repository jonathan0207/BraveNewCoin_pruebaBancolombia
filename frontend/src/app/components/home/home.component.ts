import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import Swal from 'sweetalert2';
import { data } from '../../constant/constant';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from '../../shared/dialog-content/dialog-content.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  simpleSlider = 40;
  doubleSlider = [20, 60];
  state_default = true;
  focus: any;
  data: any[] = [];

  constructor(
    private _request: RequestService,
    public dialog: MatDialog) {
    this._request.getListCoins()
      .subscribe((response: any) => {
        this.data = response;
      });
  }

  ngOnInit() { }

  openDialog() {
    const dialogRef = this.dialog.open(DialogContentComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  async onClick() {
    Swal.fire({
      title: 'Ingrese la Nueva Criptomoneda',
      input: 'select',
      inputOptions: {
        'Monedas': data
      }
      ,
      inputPlaceholder: 'Seleccione una criptomoneda',
      showCancelButton: true,
      inputValidator: (result) => !result && 'You need to select something!'
    }).then((result) => {
      if (result.isConfirmed) {
        this._request.setNewCoin(result.value)
          .subscribe((resp: any) => {
            this.data = resp;
          })
      }
    })

  }

}