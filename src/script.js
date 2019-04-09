export default function() {

  let hour;
  let min;
  let sec;
  //let dayTime;


  function* gen (current, max) {
    while(true) {
      if(current >= max) {
        current = -1;
      }
      yield ++current;
    }
  }


  const currentClock = () => {
    const date = new Date();
    hour = date.getHours();
    min = date.getMinutes();
    sec = date.getSeconds();

    // //12h
    // if(hour === 0) {
    //   dayTime = "AM";
    //   hour = 12;
    // } else if(hour < 12) { 
    //   dayTime = "AM";
    // } else if(hour === 12) {
    //   dayTime = "PM";
    // } else if(hour > 12) {
    //   dayTime = "PM";
    //   hour -= 12;
    // }
  }
  currentClock();


  const formatTime = () => {
    const clockDisplay = `${hour.toString().padStart(2, "0")}:${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`; //- dayTime
    
    document.getElementById('clock-display').innerHTML = clockDisplay;
  }


  const updateClock = () => {
    const genH = gen(hour, 23); //24h
    const genM = gen(min, 59);
    const genS = gen(sec, 59);

    setInterval(() => {
      sec = genS.next().value;
      if(sec === 0) {
        min = genM.next().value;
      }
      if(sec === 0 && min === 0) {
        hour = genH.next().value;
      }
      formatTime();
    }, 1000);
  }
  updateClock();

}



