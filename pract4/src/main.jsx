import { render } from 'react';
import  App  from './app.jsx'

render(<App />, document.getElementById('app'));


import { Gitshow } from './app.jsx';
let rootele= document.getElementById("rootele") ;
rootele.render(<Gitshow />);