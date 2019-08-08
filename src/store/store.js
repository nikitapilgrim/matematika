import createStore from 'storeon';

let stage = store => {
  store.on('@init', () => ({stage: 0}));
  store.on('next', ({stage}) => ({stage: stage + 1}));
};

export const store = createStore([stage]);