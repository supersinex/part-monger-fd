import { Component, OnInit, NgZone } from '@angular/core';
import { ApiWrapperService } from '../api-wrapper.service';
import { TruncatePipe } from '../truncate.pipe';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Part } from '../part';

@Component({
  selector: 'app-part-list',
  templateUrl: './part-list.component.html',
  styleUrls: ['./part-list.component.css']
})
export class PartListComponent implements OnInit {

  // Variables
  parts: Part[];

  constructor(private api: ApiWrapperService, private router: Router, private route: ActivatedRoute) {
    this.getParts();
   }

  ngOnInit() {
    this.getParts();
  }

  getParts() {
    this.api.getParts('parts').subscribe(data => {
      this.parts = data;
    });
  }

  addPart() {
    this.router.navigate(['/add-part']);
  }

  goToPartDetails(id: number) {
    this.router.navigate(['/part-details', id]);
  }

}
