import suncalc from 'suncalc';

const calculator = {
  position: (lat, lng) => {
    const t = new Date();
    return suncalc.getPosition(
      t,
      lat,
      lng
    );
  },
  azimuthTime: (lat, lng, dayStart, azimuth) => {
    // binary search between dayStart and dayStart + 24 hours
    // to find when the azimuth was close to the requested value
    
  },
  dumbAzimuth: (degs) => {
    // take degrees relative to 0, return radians relative to π
    return (degs - 180) * Math.PI / 180
  },
  
  degreesFromNorth: (dumbAzi) => {
    // take radians relative to π, return degrees relative to 0
    return (dumbAzi + Math.PI) * 180 / Math.PI;
  },
  
  degrees: (radians) => {
    return radians * 180 / Math.PI;
  }
};

export default calculator;