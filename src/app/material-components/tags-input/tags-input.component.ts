

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {Component, inject} from '@angular/core';
import {MatChipEditedEvent, MatChipInputEvent, MatChipsModule} from '@angular/material/chips';
import {LiveAnnouncer} from '@angular/cdk/a11y';

export interface Keyword {
  name: string;
}

/**
 * @title Chips with input
 */
@Component({
  selector: 'app-tags-input',
  templateUrl: './tags-input.component.html',
  styleUrls: ['./tags-input.component.css'],
  standalone: false,
})
export class TagsInputComponent {
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  keywords: Keyword[] = [{name: 'Java'}, {name: 'Spring'}, {name: 'Angular'}];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our keyword
    if (value) {
      this.keywords.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  remove(keyword: Keyword): void {
    const index = this.keywords.indexOf(keyword);

    if (index >= 0) {
      this.keywords.splice(index, 1);

      this.announcer.announce(`Removed ${keyword}`);
    }
  }

  edit(keyword: Keyword, event: MatChipEditedEvent) {
    const value = event.value.trim();

    // Remove keyword if it no longer has a name
    if (!value) {
      this.remove(keyword);
      return;
    }

    // Edit existing keyword
    const index = this.keywords.indexOf(keyword);
    if (index >= 0) {
      this.keywords[index].name = value;
    }
  }
}
