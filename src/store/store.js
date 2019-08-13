import createStore from 'storeon';
import Stages from '../components/stages/index';

const Progress = window.nanobar;

let stage = store => {
  store.on('@init', () => ({
    stage: 0,
    final: false,
  }));
  store.on('final', ({final}, state) => {
    return ({final: state});
  });
  store.on('next', ({stage}, number) => {
    if (number) {
      return ({stage: number})
    }
    if (Stages.length <= stage) {
      store.dispatch('final', true);
      return ({stage: stage});
    }
    return ({stage: stage + 1});
  });
};

let progress = store => {
  store.on('@init', () => ({progress: 0}));
  store.on('setProgress', ({progress}, count) => {
    Progress.go(count);
    return ({progress: count});
  });
};

export const store = createStore([stage, progress]);