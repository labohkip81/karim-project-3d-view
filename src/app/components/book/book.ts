import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import Notiflix from 'notiflix';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../modules/material/material-module';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MaterialModule, HttpClientModule],
  templateUrl: './book.html',
  styleUrl: './book.css'
})
export class Book {

  constructor(private _client: HttpClient, private dialogRef: MatDialogRef<Book>) {}

  submitFormData(formData: any): Observable<any> {
    return this._client.post(
      `https://www.blinkstudio.co.ke/send-test-email`,
      formData
    );
  }

  DownloadBrochureFormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
    company: new FormControl(''),
    type: new FormControl(''),
    agree_to_terms: new FormControl('')
  });

  downloadIt() {
    document.getElementById('downLoadIt')?.click();
    console.log('DOWNLOADING');
  }

  downloadPdf(formData: any) {
    if (this.DownloadBrochureFormGroup.valid) {
      Notiflix.Loading.circle('Sending...');
      formData['website'] = 'morvara'
      this.submitFormData({
        recipients: ["partner@karimcgvisuals.com", "labankiplagat81@gmail.com"],
        data: formData,
      }).subscribe(
        (response) => {
          console.log(response);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Success!')
          this.dialogRef.close()
        },
        (error) => {
          console.log(error);
          Notiflix.Loading.remove();
          Notiflix.Notify.success('Success!')
          this.dialogRef.close()
        }
      );
    } else {
      this.DownloadBrochureFormGroup.touched;
      console.log('-------Invalid Form Called-------');
      Notiflix.Notify.failure('Please fill all the required fields!');
    }
  }

}
