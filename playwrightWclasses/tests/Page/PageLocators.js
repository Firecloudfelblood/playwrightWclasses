const privateData = new WeakMap();
class PageLocators{

    constructor() {
        privateData.set(this, {url : 'https://example.com',
            linkLocator : 'a'})
    }

    getUrl(){
        return privateData.get(this).url;
    }
    getLinkLocator(){
        return privateData.get(this).linkLocator;
    }


}

module.exports = PageLocators;