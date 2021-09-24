const { nextISSTimesForMyLocation } = require("./iss_promised");

const getDateData = (nextPass) => {
  nextPass.map(time => {
    const datetime = new Date(time.risetime);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  });
};


nextISSTimesForMyLocation()
  .then((data) => getDateData(data))
  .catch((err) => console.log("It didn't work! ", err));