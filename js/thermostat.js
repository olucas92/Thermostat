var Thermostat = function() {
  this.temperature = 20;
  this.maximumTemp = 32;
  this.minimumTemp = 10;


};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  return this.temperature += changeTempBy;
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  return this.temperature -= changeTempBy;
}