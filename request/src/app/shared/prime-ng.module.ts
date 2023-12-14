import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {CommonModule} from "@angular/common";
import {TabMenuModule} from "primeng/tabmenu";
import {TableModule} from "primeng/table";
import {SkeletonModule} from "primeng/skeleton";
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {InputTextModule} from "primeng/inputtext";
import {FieldsetModule} from "primeng/fieldset";
import {MessagesModule} from "primeng/messages";
import {ToastModule} from "primeng/toast";
import {AnimateOnScrollModule} from "primeng/animateonscroll";
import {AnimateModule} from "primeng/animate";

const primeNg = [
  ButtonModule,
  TabMenuModule,
  TableModule,
  SkeletonModule,
  ProgressSpinnerModule,
  InputTextModule,
  FieldsetModule,
  MessagesModule,
  ToastModule,
  AnimateOnScrollModule,
  AnimateModule
]

@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    primeNg
  ]
})

export class PrimeNgModule {}
