import { Component, Input} from "@angular/core";
import { ShopService} from "../../services/shop.services";


@Component ({
    selector: 'app-cart',
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.scss']
}

) 

export class CartComponent {
    constructor(public shopService: ShopService) {}

   

}