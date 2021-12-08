/* 

same as 'setTimeout' BUT goes on indefinitely

*/

let mousePosition = null

document.onmousemove = ({screenY, screenX}) => {

  mousePosition = {screenY, screenX}

  //console.log(mousePosition)

  setInterval(() => {

    console.log(`Mouse Position: ${mousePosition.screenX} ${mousePosition.screenY}`)
    
  }, 2500);

}