function App() {
let ct=0 ;
function incct() {
  ct++ ;
  // ele selct kro usme innertext update
  if(ct<=100) {  
  let ctele = document.querySelector("h1") ;
  ctele.innerText =`counter : ${ct}`
 } else {
  ctele.innerText = `bas kar bhai `;
 }
 }

return (
<>
<h1>counter:{ct}</h1>
<button onClick={incct}>increase</button>
</>

)


}
export default App ;