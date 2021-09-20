function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    let redSorted = redShirtSpeeds.sort((f,s)=>f-s)
      let blueSorted = blueShirtSpeeds.sort((f,s)=>f-s)
      blueSorted = fastest ? blueSorted.reverse() : blueSorted
      return redSorted.reduce((total,elm,ix)=>total + Math.max(elm,blueSorted[ix]),0);
  }
  
  // Do not edit the line below.
  exports.tandemBicycle = tandemBicycle;
  