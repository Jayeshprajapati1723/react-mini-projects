import { render } from 'react-dom';
import  Apps  from './app.jsx'
import  Clock from './clock.jsx';
import {createRoot} from "react-dom/client" ;
render(<Apps />, document.getElementById('app'));
import Counter from './counter.jsx'
;


import { Gitshow } from './app.jsx';
let rootele= document.getElementById("rootele") ;
const roote = createRoot(rootele) ;
// // html element alg root hota h usme react ki functionality add nhi hoti h isliye is processs se bnate h 
// roote.render(<Gitshow />);
// roote.render(< Clock/>);
roote.render(<App/>) ;
function App () {
    return (
<>
{/* <Gitshow/> */}
{/* <Clock/> */}
<div>
    <Counter/>
</div>
</>
    )
}
export {App} ;

