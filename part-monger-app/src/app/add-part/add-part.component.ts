import { Component, OnInit } from '@angular/core';
import { ApiWrapperService } from '../api-wrapper.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Part } from '../part';

@Component({
  selector: 'app-add-part',
  templateUrl: './add-part.component.html',
  styleUrls: ['./add-part.component.css']
})
export class AddPartComponent implements OnInit {

  newPart: any = {
    name: '',
    description: '',
    cost: 0.00,
    partNumber: ''
  }

  constructor(private api: ApiWrapperService, private router: Router) {
  }

  ngOnInit() {
  }

  addPart(part: any) {
    this.api.addPart('parts', part).subscribe(response => {
      this.router.navigate(['/part-list']);
    });
  }

}
