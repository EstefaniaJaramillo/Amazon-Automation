import {$, browser} from '@wdio/globals';
import Page from '../user-interface/Page';


export class ProductDescriptionPage {


    public get searchAmazonInput(){return $("#twotabsearchtextbox")}
    public get searchButton(){return $("#nav-search-submit-button")}
    public get productLink(){
        return $("(//a/span[contains (text (), 'GALAX GeForce RTX™ 4070 Ti EX Gamer V2, Xtreme Tuner App Control, 12GB, GDDR6X, 192-bit, DP*3/HDMI 2.1/DLSS 3/Gaming Graphics Card (with Graphics Card Brace Support')])[2]")
    }
    public get productDescriptionUL(){return $("#feature-bullets > ul")}
    public get productDescriptionRAMSize(){return $("#feature-bullets > ul > li:nth-child(2)")}
    public get amazonBadgeElement(){return $("#acBadge_feature_div")}
    public get amazonBadgeText(){return $("#acBadge_feature_div > div  > span > span > span:nth-child(1)")}
    public get productBrand(){return $("(//tr[@class='a-spacing-small po-brand']/td/span)[2]")}
    public get productPrice(){return $("//span[@class='aok-offscreen']")}
    public get importFees(){return $("((//div[@id='amazonGlobal_feature_div'])[2]/span)[1]")}
    public get detailsButton(){return $("((//div[@id='amazonGlobal_feature_div'])[2]/span)[2]")}
    public get totalPrice(){return $("//div[@class='a-popover-content']/table/tbody/tr[5]/td[3]/span")}


    public open() {
        browser.url(`https://www.amazon.com/GeForce-Control-192-bit-Tarjeta-gr%C3%A1fica/dp/B0CB35FVSS/ref=sr_1_1_sspa?crid=2KDLVCPE8AJAX&keywords=gtx4090ti&qid=1695861567&sprefix=gtx4090%2Caps%2C183&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1`)
        browser.maximizeWindow()
        //return super.open();
    }
}
export default new ProductDescriptionPage();