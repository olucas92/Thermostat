var Thermostat = function() {
  this.temperature = 20;
  this.maximumTemp = 32;
  this.minimumTemp = 10;
  this.maxTempPowerSave = 25
  // this.powerSave = true;


};

Thermostat.prototype.increaseTemperature = function(changeTempBy) {
  if (this.temperature + changeTempBy > this.maximumTemp){
    this.temperature = this.maximumTemp
  }  
  else {
   this.temperature += changeTempBy;
  }
};

Thermostat.prototype.decreaseTemperature = function(changeTempBy) {
  if (this.temperature - changeTempBy < this.minimumTemp){
    this.temperature = this.minimumTemp
  }
  else {
   this.temperature -= changeTempBy;
  }
};

Thermostat.prototype.resetButton = function(){
  this.temperature = 20
  }

Thermostat.prototype.powerSave = function(){
  this.maximumTemp = false
  this.maxTempPowerSave = true
}