import {Component, Input} from "@angular/core";
import { ShopItem, ShopService } from "src/app/services/shop.services";

@Component({
selector: 'app-product',
templateUrl: './product.component.html',
styleUrls: ['./product.component.scss']
})
export class ProductComponent {
@Input()
public product: ShopItem;

@Input()
public isCartMode: boolean;

constructor(public shopService: ShopService) {}
}
