import AbstractPageContainer from 'abstract/container/page';
import NotFound from 'components/not-found/NotFound';
import {showLoader, hideLoader} from 'containers/loader/actions';
import {getRoute} from 'containers/app/selectors';
import {HOMEPAGE} from 'constants/locations';

class NotFoundContainer extends AbstractPageContainer {
    component = NotFound;

    init() {
        this.dispatch(showLoader());
        return super.init();
    }

    initData() {
        this.data = {
            home: getRoute(HOMEPAGE)
        };

        this.dispatch(hideLoader());
    }
}

export default NotFoundContainer;
