const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const startLocations = this.journeys.map( location => location.startLocation);
  return startLocations;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const endLocations = this.journeys.map(location => location.endLocation);
  return endLocations;
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  const trip = this.journeys.filter(journey => journey.transport === transport);
  return trip;
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  const trip = this.journeys.filter(journey => journey.distance > minDistance);
  return trip;
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const distanceTravelled = this.journeys.reduce((total, journey) => {
    return total + journey.distance}, 0);
    return distanceTravelled;

};

// Traveller.prototype.getUniqueModesOfTransport = function () {
//   const transports = this.journeys.map(method => method.transport)
//   return transports.filter(trans => trans.transport )
// };


module.exports = Traveller;
