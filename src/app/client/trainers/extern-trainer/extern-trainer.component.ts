import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Keyword } from 'src/app/models/keyword.model';
import { KeywordService } from 'src/app/services/keyword.service';
import { TrainerService } from 'src/app/services/trainer.service';

@Component({
  selector: 'app-extern-trainer',
  templateUrl: './extern-trainer.component.html',
  styleUrls: ['./extern-trainer.component.css']
})
export class ExternTrainerComponent {

  keywords: Keyword[] = [];

  constructor(private fb: FormBuilder, private trainerService: TrainerService, private keywordService: KeywordService) {
    this.keywords = this.keywordService.getKeywords();
  }

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
      console.log(this.keywords);

      const keys = this.keywords.map(key => key.name).join(',');

      console.log(keys);

      const formData = new FormData();

      formData.append('firstname', this.form.get('firstname')?.value);
      formData.append('lastname', this.form.get('lastname')?.value);
      formData.append('email', this.form.get('email')?.value);
      formData.append('phone', this.form.get('phone')?.value);
      formData.append('password', this.form.get('password')?.value);
      formData.append('keywords', keys);
      formData.append('image', this.selectedFile);

      this.trainerService.addTrainerExtern(formData)
        .subscribe(
          (newTrainer) => {
            console.log('Trainer added successfully:', newTrainer);
            // Optionally, you can redirect or perform other actions here
          },
          (error) => {
            console.error('Error adding trainer:', error);
            // Handle error as needed
          }
        );
    } else {
      console.error('No file selected');
    }
  }
  }


