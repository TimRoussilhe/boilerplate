import AbstractPageComponent from 'abstract/component/DOM/page';
import Tpl from './not-found.twig';

class NotFound extends AbstractPageComponent {

    template = Tpl;
    selector = '#app-not-found';

}

export default NotFound;
