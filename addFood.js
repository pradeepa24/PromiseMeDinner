/**CALL THIS FUNCTION FROM OTHER FILES LIKE:
 * 
 * addFood('take steak from fridge', #steak)
 * 
 *  
 * */


/****** DO NOT TOUCH *****/
function addFood(step, id, callback){
    return new Promise((resolve, reject)=>{
      setTimeout(() => {
        console.log(step);
        document.querySelector(id).innerHTML += (`<li>${step}</li`)
        resolve(step)
        callback ? callback() : '';
      }, Math.floor(Math.random() * 1000));
    })
  }
  /*****^ DO NOT TOUCH *****/
    