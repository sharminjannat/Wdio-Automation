import { searchObject } from "./searchObject";

let searchLocator = new searchObject();

export class SearchActions{
    async clickSearchIcon(){
        await searchLocator.searchIcon.click();
    }
    async enterProductName(productName){
        await searchLocator.searchInputField.setValue(productName);
     }
    

}