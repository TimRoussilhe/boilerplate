import AbstractLoaderComponent from 'abstract/component/DOM/loader';
import Tpl from './pageloader.twig';

class PageLoader extends AbstractLoaderComponent {
  constructor(options) {
    super(options);

    this.template = Tpl;
  }

}

export default PageLoader;
