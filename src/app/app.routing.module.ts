// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component'; // Import your components
import { PerfumeComponent } from './perfume/perfume.component'; // Import your components

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'perfume', component: PerfumeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
