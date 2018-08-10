import { SubmitFlagFormComponent } from './submit-flag-form/submit-flag-form.component';
import { ValidateFieldsSubmitFormComponent } from './validate-fields-submit-form/validate-fields-submit-form.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'simpleForm', component: SimpleFormComponent },
      { path: 'validateSubmit', component: ValidateFieldsSubmitFormComponent },
      { path: 'submitFlag', component: SubmitFlagFormComponent },
      { path: 'products', component: ProductComponent },
      { path: 'products/petDetail/:id', component: ProductDetailComponent }
      // {
      //   path: 'products', component: ProductComponent, children: [{
      //     path: 'petDetail/:id', component: ProductDetailComponent
      //   }]
      // },
      // { path: 'petDetail/:id', component: ProductDetailComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
