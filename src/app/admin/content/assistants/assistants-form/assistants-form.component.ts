import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AssistantService } from 'src/app/services/assistant.service';

@Component({
  selector: 'app-assistants-form',
  templateUrl: './assistants-form.component.html',
  styleUrls: [
    './assistants-form.component.css',
    './../../../layout/layout.component.css',
    './.././../../layout/bootstrap-overwrite.css',
  ],
})
export class AssistantsFormComponent  implements OnInit{


  constructor(private fb: FormBuilder, private assistantService: AssistantService) {}

  form: any;
  selectedFile: File | null = null;



  ngOnInit(): void {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      image: [null, Validators.required],
    });
  }

  onFileChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;

    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0];
    }
  }

  onSubmit(): void {
    if (this.selectedFile) {
      console.log("selectedFile");
      console.log(this.form);


      const formData = new FormData();

      formData.append('firstname', this.form.get('firstname')?.value);
      formData.append('lastname', this.form.get('lastname')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('phone', this.form.get('phone')?.value);
      formData.append('password', this.form.get('password')?.value);
      formData.append('image', this.selectedFile);

      this.assistantService.addAssistant(formData)
        .subscribe(
          (newAssistant) => {
            console.log('Assistant added successfully:', newAssistant);
          },
          (error) => {
            console.error('Error adding assistant:', error);
          }
        );
    } else {
      console.error('No file selected');
    }
  }

}
