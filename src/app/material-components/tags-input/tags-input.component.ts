import {COMMA, ENTER} from '@angular/cdk/keycodes';
import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';

export interface Keyword {
  name: string;
}

@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css'],
})
export class TagsInputComponent {

  @Input() keywords: Keyword[] = [{name: 'Java'}, {name: 'Spring'}, {name: 'Angular'}];
  @Output() keywordsChanged = new EventEmitter<Keyword[]>();

  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.keywords.push({name: value});
      this.keywordsChanged.emit(this.keywords); // Emitting event to notify parent about the change
    }

    event.chipInput!.clear();
  }

  remove(keyword: Keyword): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);
      this.keywordsChanged.emit(this.keywords); // Emitting event to notify parent about the change
      this.announcer.announce(`Removed ${keyword}`);
    }
  }

  edit(keyword: Keyword, event: MatChipEditedEvent) {
    const value = event.value.trim();

    if (!value) {
      this.remove(keyword);
      return;
    }

    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords[index].name = value;
      this.keywordsChanged.emit(this.keywords); // Emitting event to notify parent about the change
    }
  }
}
