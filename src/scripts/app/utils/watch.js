// // const getValue = require('object-path').get;
// import _ from 'underscore';
// import store from 'store';

// const compareValues = (a, b) => {
//   return _.isEqual(a, b);
// };

// const compareStates = (a, b) => {
//   return a.equals(b); // === b;
// };

// let currentState = store.getState();

// const aPath = [];
// const aPathExisting = [];

// const watch = () => {
//   // return () => {
//     // console.log('compare states', this.oPath);
//     const prev = currentState;
//     currentState = store.getState(); // getState.getIn(aPath);

//     if (!compareStates(prev, currentState)) {
//       // console.log('>>>');
//       aPath.forEach((o, i) => {
//         // console.log('i', i);
//         const splitPath = o.path.split('.');

//         // if (o.path === 'browser.width') console.log('compare value', splitPath, currentState.getIn(splitPath), prev.getIn(splitPath));

//         if (!compareValues(currentState.getIn(splitPath), prev.getIn(splitPath))) {
//           // console.log('new value', o.path, currentState.getIn(splitPath), i);

//           o.aCallback.forEach((cb) => {
//             // if (o.path === 'browser.width') console.log('cb', cb);
//             setTimeout(() => cb(currentState.getIn(splitPath), prev.getIn(splitPath), o.path), 0);
//           });
//         }
//       });
//       // const aPath = this.oPath.split('.');
//     }
//   // };
// };

// store.subscribe(watch);

// export class Watch {

//     constructor(objectPath, callback) {
//       this.oPath = objectPath;
//       this.callback = callback;

//       const idx = aPathExisting.indexOf(objectPath);

//       if (idx > -1) {
//         // if new callback, add it
//         let check = true;
//         aPath[idx].aCallback.forEach((cb) => {
//           if (cb === callback) check = false;
//         });

//         if (check) {
//           // add the callback
//           aPath[idx].aCallback.push(callback);
//         }

//         return;
//       }

//       aPath.push({
//         path: objectPath,
//         aCallback: [callback]
//       });

//       aPathExisting.push(objectPath);
//     }

//     dispose() {
//       const idx = aPathExisting.indexOf(this.oPath);

//       if (idx > -1) {
//         // delete only the callback. If last calkback, delete the path
//         let idxCb = 0;
//         aPath[idx].aCallback.forEach((cb, i) => {
//           if (cb === this.callback) idxCb = i;
//         });

//         // if (idxCb > -1) {
//         aPath[idx].aCallback.splice(idxCb, 1);
//         // }
//         if (!aPath[idx].aCallback.length) {
//           aPath.splice(idx, 1);
//           aPathExisting.splice(idx, 1);
//         }
//       }
//     }
// }
