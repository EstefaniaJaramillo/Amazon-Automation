import {$} from '@wdio/globals';
import Page from './Page';

export class uI extends Page {


    public get button(){return $("#")}

    public open() {
        return super.open()
    }
}