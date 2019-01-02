import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AnnotationComponent } from './annotation/annotation.component';
import { DataCollectionComponent } from './data-collection/data-collection.component';
import { ItComponent } from './it/it.component';
import { ContactComponent } from './contact/contact.component';
import { BlogComponent } from './blog/blog.component';
import { CareersComponent } from './careers/careers.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {path:'', redirectTo:'/home', pathMatch:"full"},
  {path:'home', component:HomeComponent},
  {path:'annotation', component:AnnotationComponent},
  {path:'data-collection', component:DataCollectionComponent},
  {path:'it-services', component:ItComponent},
  {path:'contact', component:ContactComponent},
  {path:'blog', component:BlogComponent},
  {path:'career', component:CareersComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
