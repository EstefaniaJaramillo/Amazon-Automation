import {ProductDescriptionPage} from '../user-interface/ProductDescriptionPage'

export class VerifyProductTask extends ProductDescriptionPage {

    public async SearchProduct(productName: string) {
        await this.searchAmazonInput.waitForDisplayed();
        await this.searchAmazonInput.setValue(productName);
        await this.searchButton.click();
        await this.productLink.waitForDisplayed();
        await this.productLink.click();
    }

    public async getRAMsize(){
        return await this.productDescriptionRAMSize.getText()
    }

    public async getBrand(){
        return (await this.productBrand.getText()).toString
    }

    public async getPrice(){
        return await this.productPrice.getText().toString
    }

    public async getImportFees(){
        return await this.importFees.getText().toString
    }

    public async getTotalPrice(){
        return await this.totalPrice.getText().toString
    }

    public async getBulletsQuantity(){
        return await this.productDescriptionUL.$$("li")
    }

}