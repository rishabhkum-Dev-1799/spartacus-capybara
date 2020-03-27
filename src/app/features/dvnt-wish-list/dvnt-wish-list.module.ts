import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ConfigModule,
  CmsStructureConfig,
  CmsConfig,
  ContentSlotComponentData,
  CmsPageSlotsConfig,
  I18nModule,
  UrlModule,
} from '@spartacus/core';
import { MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';

import { DvntWishListComponent } from './dvnt-wish-list.component';
import { DvntWishListItemComponent } from './dvnt-wish-list-item/dvnt-wish-list-item.component';
import {
  wishListCmsConfig,
  cmsStructureConfig,
  translationsConfig,
} from './config/wish-list.config';

@NgModule({
  declarations: [DvntWishListComponent, DvntWishListItemComponent],
  imports: [
    CommonModule,
    I18nModule,
    MediaModule,
    RouterModule,
    UrlModule,
    ConfigModule.withConfig(translationsConfig),
    ConfigModule.withConfigFactory(cmsStructureConfig),
    ConfigModule.withConfig(wishListCmsConfig),
  ],
  entryComponents: [DvntWishListComponent],
})
export class DvntWishListModule {}