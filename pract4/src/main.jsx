import { render } from 'react-dom';
import  App  from './app.jsx'
import {createRoot} from "react-dom/client" ;
render(<App />, document.getElementById('app'));


import { Gitshow } from './app.jsx';
let rootele= document.getElementById("rootele") ;
const roote = createRoot(rootele) ;
// html element alg root hota h usme react ki functionality add nhi hoti h isliye is processs se bnate h 
roote.render(<Gitshow />);