import { NgModule } from "@angular/core";
import { HeroComponent } from "./hero/hero.component";
import { ListComponent } from "./list/list.component";
import { CommonModule, NgFor, NgIf } from "@angular/common";


@NgModule({
  declarations: [
    HeroComponent,
    ListComponent
  ],
  imports: [
    // NgIf,
    // NgFor
    CommonModule
  ],
  exports: [
    HeroComponent,
    ListComponent
  ]
})


export class HeroesModule { }
