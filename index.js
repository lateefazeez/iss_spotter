const { nextISSTimesForMyLocation } = require("./iss");

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work! ", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", ip);
// });

// fetchCoordsByIP("198.53.4.127", (error, coordinates) => {
//   if (error) {
//     console.log("It didn't work! ", error);
//     return;
//   }
//   console.log("It worked! Returned IP: ", coordinates);
// });

// fetchISSFlyOverTimes({ latitude: '51.1613', longitude: '-113.9518' }, (error, flyOverData) => {
//   if (error) {
//     console.log(`An error has occured , ${error}`);
//     return;
//   }
//   console.log(`it worked! Returned flyoverData, ${JSON.stringify(flyOverData)} `);
// });

const getDateData = (nextPass) => {
  nextPass.map(time => {
    const datetime = new Date(0);
    datetime.setUTCSeconds(time.risetime);
    const duration = time.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  });
};

nextISSTimesForMyLocation((error, nextPass) => {
  if (error) return console.log("It didn't work! ", error);
  
  getDateData(nextPass);
});