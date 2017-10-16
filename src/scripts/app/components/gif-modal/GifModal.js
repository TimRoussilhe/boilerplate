import AbstractModalComponent from 'abstract/component/DOM/modal';
import Tpl from './gif-modal.twig';
import {TweenLite} from 'gsap';

// import GifModalSingle from './GifModalSingle';
import ShareUtil from 'utils/share.js';

class GifModal extends AbstractModalComponent {
  constructor(options) {
    super(options);

    this.events = {
        'click .twitter button': ::this._shareTwitter,
        'click .facebook button': ::this._shareFacebook
    };

    this.promises.hideStep = {
        resolve: null,
        reject: null
    };

    this.promises.showStep = {
        resolve: null,
        reject: null
    };

    this.template = Tpl;
  }

  initDOM() {
    // this.$els.step01 = this.$el.find('.gif-step01');
    // this.$els.step02 = this.$el.find('.gif-step02');

    this.$els.twitterBtn = this.$el.find('.social-item.twitter button');
    this.$els.facebookBtn = this.$el.find('.social-item.facebook button');
    //     this.$els.downloadBtn = this.$el.find('.social-item.download a');

    //     // this.$els.gifs = this.$el.find('.gif-step01 .gif-modal-col');
    //     // this.$els.back = this.$el.find('.back-wrapper');

    //     console.log(this.data);

    //     // return an image as an ArrayBuffer.
    //     const xhr = new XMLHttpRequest();

    //     // Use JSFiddle logo as a sample image to avoid complicating
    //     // this example with cross-domain issues.
    //     const url = this.data.src;
    //     xhr.open('GET', url, true);

    //     // Ask for the result as an ArrayBuffer.
    //     xhr.responseType = 'arraybuffer';

    //     xhr.onload = (e) => {
    //         // Obtain a blob: URL for the image data.
    //         const arrayBufferView = new Uint8Array(this.response);
    //         const blob = new Blob([arrayBufferView], {type: 'image/gif'});
    //         const urlCreator = window.URL || window.webkitURL;
    //         const imageUrl = urlCreator.createObjectURL(blob);
    //         // const img = document.querySelector('#photo');
    //         // img.src = imageUrl;
    //         this.$els.downloadBtn.attr('href', imageUrl);
    //         this.$el.find('.gif-share-image-container img').attr('src', imageUrl);
    //         console.log('imageUrl', imageUrl);
    //     };

    //     xhr.send();
    }

  onShown() {
    //   this.actions.updateModal(true);
      super.onShown();
  }

  onHidden() {
    //   this.actions.updateModal(false);
      super.onHidden();
  }

    // /**
    //  * Show a step
    // */
    // showStep(step) {
    //     return new Promise((resolve, reject) => {
    //         this.promises.showStep.resolve = resolve;
    //         this.promises.showStep.reject = reject;

    //         // show animation
    //         TweenLite.to(step, 0.5, {autoAlpha: 1, onComplete: ::this.onStepShown()});
    //     });
    // }

	// /**
	//  * The step is shown
	//  */
    // onStepShown() {
    //     this.promises.showStep.resolve();
    // }

    // /**
    //  * Show a step
    // */
    // hideStep(step) {
    //     return new Promise((resolve, reject) => {
    //         this.promises.hideStep.resolve = resolve;
    //         this.promises.hideStep.reject = reject;

    //         // hide animation
    //         TweenLite.to(step, 0.5, {autoAlpha: 0, onComplete: ::this.onStepHidden()});
    //     });
    // }

	/**
	 * The step is shown
	 */
    // onStepHidden() {
    //    this.promises.hideStep.resolve();
    // }

    // showBackArrow() {
    //     TweenLite.to(this.$els.back, 0.5, {autoAlpha: 1});
    // }

    // hideBackArrow() {
    //     TweenLite.to(this.$els.back, 0.5, {autoAlpha: 0});
    // }

    // _onEnterGif(e) {
    //     const currentTarget = e.currentTarget;
    //     const gif = currentTarget.dataset.gif;

    //     currentTarget.querySelector('img').src = gif;
    // }

    // _onLeaveGif(e) {
    //     const currentTarget = e.currentTarget;
    //     const jpeg = currentTarget.dataset.jpeg;

    //     currentTarget.querySelector('img').src = jpeg;
    // }

    // TODO
    // _displayStep01() {
    //     TweenLite.to(this.$els.back, 0.5, {autoAlpha: 0});
    //     TweenLite.to(this.$els.step02, 0.5, {autoAlpha: 0, onComplete: () => {
    //             this.$els.step02[0].style.display = 'none';
    //             this.$els.step01[0].style.display = 'flex';
    //             TweenLite.to(this.$els.step01, 0.5, {autoAlpha: 1});
    //         }
    //     });
    // }

    // _displayStep01() {
    //     this.hideBackArrow();
    //     this._updateStep('01');
    // }

    // _displayStep02(e) {
    //     const gif = e.currentTarget.dataset.gif;
    //     this._updateStep('02', gif);
    // }

//   _displayStep02() {
//         const oldStep = this.$els.step01;
//         const currentStep = this.$els.step02;

//         this.hideStep(oldStep).then(() => {
//             this.$els.step01[0].style.display = 'none';
//             this.$els.step02[0].style.display = 'flex';
//             this.singleModal = new GifModalSingle({
//                 data: {
//                     mainGif: 'https://storage.googleapis.com/gpride-assets/images/dummy/share-gif_2.gif'
//                 }
//             });
//             this.singleModal.init().then(() => {
//                 this.$els.step02.append(this.singleModal.el);
//                 this.showStep(currentStep);
//             });
//         });
//   }

//   _updateStep(stepID, mainGif = false) {
//     let oldStep;
//     let currentStep;

//     switch (stepID) {
//         case '01':
//             oldStep = this.$els.step02;
//             currentStep = this.$els.step01;
//             break;
//         case '02':
//             oldStep = this.$els.step01;
//             currentStep = this.$els.step02;
//             break;
//         default:
//             oldStep = this.$els.step02;
//             currentStep = this.$els.step01;
//             break;
//     }

//     this.hideStep(oldStep).then(() => {
//         oldStep[0].style.display = 'none';
//         currentStep[0].style.display = 'flex';

//         if (mainGif) {
//             this.singleModal = new GifModalSingle({
//                 data: {
//                     mainGif: mainGif
//                 }
//             });
//             this.singleModal.init().then(() => {
//                 this.$els.step02.append(this.singleModal.el);
//                 this.showStep(currentStep).then(() => {
//                     this.showBackArrow();
//                 });
//             });
//         } else {
//              this.showStep(currentStep).then(() => {
//                  this.singleModal.dispose();
//                  this.singleModal = null;
//              });
//         }
//     });
//   }

  _shareTwitter(e) {
        ShareUtil.openPopup(this.$els.twitterBtn[0]);
        e.preventDefault();
    }

    _shareFacebook(e) {
        ShareUtil.openPopup(this.$els.facebookBtn[0]);
        e.preventDefault();
    }

}

export default GifModal;
