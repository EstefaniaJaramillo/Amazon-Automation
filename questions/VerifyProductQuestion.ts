import {expect as assert} from 'chai'
import {expect} from 'chai'
import { VerifyProductTask } from "../tasks/VerifyProductTask";
import {ProductDescriptionPage} from '../user-interface/ProductDescriptionPage';

let verifyProductTask = new VerifyProductTask();

export class VerifyProductQuestion extends ProductDescriptionPage{


    public async checkProductRAMSize(expectedRAMSize: string){
        await assert(await verifyProductTask.getRAMsize()).to.include(expectedRAMSize)
    }

    public async checkProductTag(){
        await assert(await this.amazonBadgeElement).to.exist;
    }

    public async checkProductBrand(expectedValue: string){
        await assert(verifyProductTask.getBrand()).to.equal(expectedValue);
    }
}

export default new VerifyProductQuestion()