import createStore from 'storeon';
import Stages from '../components/stages/index';

const Progress = window.nanobar;

const stage = store => {
  store.on('@init', () => ({
    stage: 0,
    final: false,
  }));
  store.on('final', ({final}, state) => {
    return ({final: state});
  });
  store.on('next', ({stage}, number) => {
    console.log('next', stage)
    if (number === 0 || number) {
      return ({stage: number});
    }
    if (Stages.length <= stage) {
      store.dispatch('final', true);
      return ({stage: stage});
    }
    return ({stage: stage + 1});
  });
};

const audio = store => {
  store.on('@init', () => ({
    audio: {
      intro: false,
      win: false,
    }
  }));

  store.on('intro/on', ({audio}) => {
    return ({audio: {...audio, intro: true}});
  });
  store.on('intro/off', ({audio}) => {
    return ({audio: {...audio, intro: false}});
  });
};

const progress = store => {
  store.on('@init', () => ({progress: 0}));
  store.on('setProgress', ({progress}, count) => {
    Progress.go(count);
    return ({progress: count});
  });
};

export const store = createStore([stage, progress, audio]);