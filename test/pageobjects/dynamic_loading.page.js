import Page from './page.js';

class dynamicPage extends Page {

get startButton () {
    return $('//*[@id="start"]/button')
}

    open () {
        return super.open('dynamic_loading/2');
    }

}

export default new dynamicPage();