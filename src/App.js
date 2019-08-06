import React from 'react';
import {Link, Route} from 'wouter';
//#if _DEBUG
import HotManager from './HotManager';
//#endif

const App = () => {
  return (
    <div>

    </div>
  );
};

//#if _DEBUG
HotManager.register(module.id);
//#endif

export default App;
