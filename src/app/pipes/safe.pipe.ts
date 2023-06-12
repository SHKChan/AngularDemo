import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

// to bypass Angular's built-in security checks prevent you from including certain types of content within an iframe
// mark a URL as safe to use within an iframe element
// e.g.: '<iframe [src]="videoUrl | safe" width="560" height="315" frameborder="0" allowfullscreen></iframe>'

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}