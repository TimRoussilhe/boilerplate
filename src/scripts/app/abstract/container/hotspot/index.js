import AbstractContainer from 'abstract/container';

// Actions
import {hideExperience} from 'containers/experience/actions';

/**
 * HotspotContainer: Defines a hotspot container
 * @extends AbstractContainer
 * @constructor
 */
class HotspotContainer extends AbstractContainer {

    initActions() {
        this.options.actions.close = ::this._close;
    }

    _close() {
        this.dispatch(hideExperience());
    }
}

export default HotspotContainer;
