import { Component, OnInit } from '@angular/core';
import { ApiWrapperService } from '../api-wrapper.service';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  // Variables
  parts: any[];

  constructor(private api: ApiWrapperService) { }

  ngOnInit() {
    this.api.get('parts').subscribe(data => {
      this.parts = data;
    });
  }

}
