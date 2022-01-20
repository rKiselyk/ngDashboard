import { Component, OnInit } from '@angular/core';
import { SalesDataService } from 'app/services/sales-data.service';
import { Order } from 'app/shared/order';

@Component({
  selector: 'app-section-order',
  templateUrl: './section-order.component.html',
  styleUrls: ['./section-order.component.css']
})
export class SectionOrderComponent implements OnInit {

  orders: Order[] = [
    { id: 1, customer: { id: 1, name: "Name"}, total: 250, placed: new Date(2022, 1, 19), completed: new Date(2022, 1, 12) ,status: "Complied" }
  ];
  total: number = 0;
  page: number = 1;
  limit: number = 10;
  loading: boolean = false;

  constructor(
    private salesDataService: SalesDataService
  ) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.salesDataService.getOrders(this.page, this.limit).subscribe(res => {
       this.orders = res["page"]["data"];
       this.total = res["page"].total;
       this.loading = false;
    })
  }

  goToPrevious(): void {
    this.page--;

    this.getOrders();
  }

  goToNext(): void {
    this.page++;

    this.getOrders();
  }

  goToPage(n: number): void {
    this.page = n;

    this.getOrders();
  }
}
