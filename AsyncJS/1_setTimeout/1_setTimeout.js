/* 

//setTimeout(func~, duration(ms))

**To do ONE thing.
***Has access to variables before it.
***Code before and after it don't have access to 'it'.

*/

let timeExpired = false
const expiresIn = 3500

setTimeout(() => {
  console.log(`Time's up!`)
  timeExpired = true
}, expiresIn)

window.handleCompleted = () => {
  if(timeExpired){
    alert(`Time's up tin can!`)
  }
  
  alert(`Welcome, fellow human!`)
}