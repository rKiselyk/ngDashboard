import { Customer } from "./customer";

export class Order {
    id: number;
    customer: Customer;
    total: number;
    placed: Date;
    completed: Date;
    status: string;
}