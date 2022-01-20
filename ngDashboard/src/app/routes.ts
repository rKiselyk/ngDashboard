import { Routes } from "@angular/router"
import { SectionHealthComponent } from "./sections/section-health/section-health.component"
import { SectionOrderComponent } from "./sections/section-order/section-order.component"
import { SectionSalesComponent } from "./sections/section-sales/section-sales.component"

export const appRoutes: Routes = [
    { path: "sales", component: SectionSalesComponent },
    { path: "orders", component: SectionOrderComponent },
    { path: "health", component: SectionHealthComponent },

    { path: "", redirectTo: "/sales", pathMatch: "full" }
]