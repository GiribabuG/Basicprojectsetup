import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { AppServices } from '../../app.services';



@Component({
  selector: 'app-file-uploading',
  templateUrl: './file-uploading.component.html',
  styleUrls: ['./file-uploading.component.css']
})
export class FileUploadingComponent implements OnInit {

  constructor(private appServices: AppServices) { }
  selectedFiles: any;
  urls = [];
  getarray = [1]

  ngOnInit() {
  }

  addrow() {
    this.getarray.push(this.getarray.length + 1)
  }




  detectFiles(event) {
    this.selectedFiles = event.target.files;
    if (event.target.files && event.target.files[0]) {

      var filesAmount = event.target.files.length;

      for (let i = 0; i < filesAmount; i++) {

        var reader = new FileReader();
        reader.onload = (event: any) => {

          this.urls.push(event.target.result)
        }
        reader.readAsDataURL(event.target.files[i]);

      }

    }
  }

}
