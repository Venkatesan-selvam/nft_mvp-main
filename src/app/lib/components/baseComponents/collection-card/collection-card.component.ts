import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-card',
  templateUrl: './collection-card.component.html',
})
export class CollectionCardComponent {
  @Input() item: any;
  @Input() index: any;
  @Input() collection: any;
  @Input() selected: any;
  selectedIcon: any;
  checkedValue: any;

  constructor(private router: Router) {}

  ngOnChanges() {
    const isChecked = this.selected.some(
      (obj: any) => obj?.token?.tokenId === this.item?.token?.tokenId
    );

    this.checkedValue = isChecked;
    this.setMarketPlaceIcon(this.item);
  }
  goToPage() {
    this.router.navigate([
      `item`,
      this.collection,
      this.item.token.contract,
      this.item.token.tokenId,
    ]);
  }

  setMarketPlaceIcon(item: any) {
    let name = item?.market?.floorAsk?.source?.name;

    switch (name) {
      case 'OpenSea':
        this.selectedIcon = {
          'iconStatus': 'image',
          'iconLink' : 'opensea.svg'
        }
        break;
      case 'blur.io':
        this.selectedIcon = {
          'iconStatus': 'image',
          'iconLink' : 'blur.svg'
        }
        break;
      case 'LooksRare':
        this.selectedIcon = {
          'iconStatus': 'image',
          'iconLink' : 'looksrare.svg'
        }
        break;
      case 'X2Y2':
        this.selectedIcon = {
          'iconStatus': 'image',
          'iconLink' : 'x2y2.svg'
        }
        break;
      case 'rarible':
        this.selectedIcon = {
          'iconStatus': 'image',
          'iconLink' : 'rarible.svg'
        }
        break;
      default:
        this.selectedIcon = {
          'iconStatus': 'cdn',
          'iconLink' : item?.market?.floorAsk?.source?.icon
        }
        break;
    }
  }
}
