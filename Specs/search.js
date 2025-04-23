import { SearchActions } from "../test/search/searchPage";
const ProductName = "Nike air zoom pegasus 35";
let search = new SearchActions();
describe("Demo evershop automation test",()=>{
    it("search test scenarios", async()=>{
        await search.clickSearchIcon();
        await search.enterProductName(ProductName);
        await browser.pause(5000);
    })
})