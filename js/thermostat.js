var Thermostat = function() {
  this.temperature = 20;
  this.defaultTemp = 20
  this.minimumTemp = 10;
  this.powerSave = true;


};

Thermostat.prototype.maximumTemp = function() {
  if (this.powerSave === true) {
    return 25;
  } else {
    return 32
  }
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
  return this.temperature = this.defaultTemp
};

// Thermostat.prototype.colour = function(){
//   if (this.temperature < 19) {this.colour = "blue"}
// }


// Thermostat.prototype.powerSave = function(){
// }