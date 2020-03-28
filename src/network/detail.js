import {request} from "./request";
export function getDetailSwiper(iid) {
  return request({
    url: '/detail',
    params: {
      iid
    }
  })
}

export function getRecommend() {
    return request({
      url: '/recommend'
    })
}

export class GoodsInfo {
  constructor(itemInfo,columns,services) {
    this.title = itemInfo.title;
    this.price = itemInfo.price;
    this.oldPrice = itemInfo.oldPrice;
    this.discountBgColor = itemInfo.discountBgColor;
    this.discountDesc = itemInfo.discountDesc;
    this.columns = columns;
    this.services = services;
  }
}

export class ShopInfo {
  constructor(shopInfo) {
    this.shopLogo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.cSells = shopInfo.cSells;
    this.cGoods = shopInfo.cGoods;
    this.score = shopInfo.score;


  }
}

export class DetailInfo {
  constructor(detailInfo) {
    this.desc = detailInfo.desc;
    this.detailImage = detailInfo.detailImage;
  }
}

export class DetailItemParams {
  constructor(info,rule) {
    // this.image = info.images ? info.images[0] : '';
    this.set = info.set;
    this.tables = rule.tables;
  }
}
