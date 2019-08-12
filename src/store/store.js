import createStore from 'storeon';

const Progress = window.nanobar;

let stage = store => {
  store.on('@init', () => ({stage: 0}));
  store.on('next', ({stage}) => ({stage: stage + 1}));
};

let progress = store => {
  store.on('@init', () => ({progress: 0}));
  store.on('setProgress', ({progress}, count) => {
    Progress.go(count);
    return ({progress: count});
  });
};

export const store = createStore([stage, progress]);