export class searchObject{
    get searchIcon(){
        return $("//a[@class='search-icon']")
    }
    get searchInputField(){
        return $("//input[@placeholder='Search']");
    }
}

//module.exports = new searchObject();