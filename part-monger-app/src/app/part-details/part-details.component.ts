import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ApiWrapperService } from '../api-wrapper.service';
import { Part } from '../part';
import { Inventory } from '../inventory';

@Component({
  selector: 'app-part-details',
  templateUrl: './part-details.component.html',
  styleUrls: ['./part-details.component.css']
})
export class PartDetailsComponent implements OnInit {

  id: number;
  inventoryID: number;
  selectedPart: Part;
  selectedInventory: Inventory;

  quantity: number;

  constructor(private api: ApiWrapperService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });

    this.api.getPartDetails('parts/' + this.id).subscribe(response => {
      this.selectedPart = response;
    });

    this.api.getInventory('parts/' + this.id + '/inventory').subscribe(response => {
      console.log(response);
      this.inventoryID = response[0].id;
      this.selectedInventory = response[0];
      this.quantity = response[0].quantity;
      this.selectedInventory.description = "Description here.";
    });
  }

  updatePart(part: Part, inventory?: Inventory) {
    this.api.updateInventory(('inventory/' + this.inventoryID), inventory).subscribe(response => {
    });
    this.api.updatePartDetails(('parts/' + part.id), part).subscribe(response => {
      this.router.navigate(['/part-list']);
    });
  }

  receivePart() {
    this.quantity += 1;
  }

  consumePart() {
    this.quantity -= 1;
  }

}
