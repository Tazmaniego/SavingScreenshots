import Page from './page.js';

class dynamicPage extends Page {

get startButton () {
    return $('//*[@id="start"]/button');
}

get Header4 () {
    return $('//*[@id="finish"]/h4')
}

    open () {
        return super.open('dynamic_loading/2');
    }

}

export default new dynamicPage();