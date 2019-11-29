const wait = time => new Promise(
    res => {
      res(42);
    }
  );
  
  wait(200)   
    .then(() => { throw new Error('bar'); })
    // When a promise is rejected, success handlers get skipped.
    // Nothing logs here because of the 'bar' exception:
    .then(g => console.log(`success1`), e=>console.log('error1:'+e))
    .then(g => console.log('success2:'+g), e=>console.log('error2:'+e))
    .catch(h => console.log('catcher:'+h)) // [Error: bar]
  ;