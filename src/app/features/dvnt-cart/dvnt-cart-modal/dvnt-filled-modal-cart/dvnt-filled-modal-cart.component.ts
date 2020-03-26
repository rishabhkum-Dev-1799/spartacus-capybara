import { Component, Output, Input, EventEmitter } from '@angular/core';
import { MiniCartComponent, PromotionService } from '@spartacus/storefront';
import {
  RoutingService,
  CartService,
  OrderEntry,
  PromotionResult,
} from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dvnt-filled-modal-cart',
  templateUrl: './dvnt-filled-modal-cart.component.html',
  styleUrls: ['./dvnt-filled-modal-cart.component.scss'],
})
export class DvntFilledModalCartComponent extends MiniCartComponent {
  public promotions$: Observable<
    PromotionResult[]
  > = this.promotionService.getOrderPromotionsFromCart();

  @Input() public products: OrderEntry[] = [];

  @Output() public closeSideBar = new EventEmitter<any>();

  constructor(
    // tslint:disable-next-line: deprecation
    protected cartService: CartService,
    private promotionService: PromotionService,
    private routingService: RoutingService
  ) {
    super(cartService);
  }

  public goToCheckout(): void {
    this.closeSideBar.emit();
    this.routingService.goByUrl('checkout');
  }

  public dismissCartModal(): void {
    this.closeSideBar.emit();
  }
}
