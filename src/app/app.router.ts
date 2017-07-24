import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component'; 
import { BillingComponent} from './billing/billing.component';

export const router : Routes = [
	{ path: '',redirectTo: 'products',pathMatch: 'full'},
	{ path: 'products', component:ProductsComponent},
	{ path: 'billing', component:BillingComponent}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);