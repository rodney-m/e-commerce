import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ui-gallery',
  templateUrl: './gallery.component.html',
  styles: [
  ]
})
export class GalleryComponent implements OnInit {

  selectedImageURL : string;

  @Input() images : string[]
  constructor() { }

  ngOnInit(): void {
    if (this.images.length){
      this.selectedImageURL = this.images[0];
    }
  }

  changeselectedImageURL(imageUrl: string){
    this.selectedImageURL = imageUrl
  }

  get hasImages(){
    return this.images?.length > 0
  }

}
