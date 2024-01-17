import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-assistants-main',
  templateUrl: './assistants-main.component.html',
  styleUrls: ['./assistants-main.component.css', './../../../layout/layout.component.css', './.././../../layout/bootstrap-overwrite.css']
})
export class AssistantsMainComponent {

  assistantForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {

    this.assistantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: [''],
      password: ['']
    });
  }

  onSubmit() {
    
      const formData = this.assistantForm.value;
      const apiUrl = 'http://localhost:8080/api/v1/trainers';

      this.http.post(apiUrl, formData).subscribe(
        (response) => {
          console.log('POST request successful', response );
          this.assistantForm.reset();
        },
        (error) => {
          console.error('POST request failed', error);
        }
      );
    
  }
}

