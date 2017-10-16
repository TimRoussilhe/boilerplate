import AbstractContainer from 'abstract/container';
import Footer from 'components/footer/Footer';

class FooterContainer extends AbstractContainer {
    component = Footer;

    initData() {
        this.data = this.getState().get('footer').get('data').toJS();
    }
}

export default FooterContainer;
