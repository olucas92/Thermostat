var thermostat = new Thermostat();

var updateTemperature = function(){
  $('#temperature').text(thermostat.temperature)
};

var updateColour = function(){
  thermostat.temperatureColour
  $('#energy-colour').addClass(thermostat.energyColour)
};

var removePowerSavingColours = function() {
  $('#power-saving-mode').removeClass();
};

$(document).ready(function(){
  updateTemperature();

  $('#increase-temperature').on('click', function(){
    thermostat.increaseTemperature(1);
    updateTemperature();
  });

  $('#decrease-temperature').on('click', function(){
    thermostat.decreaseTemperature(1);
    updateTemperature();
  });

  $('.reset').on('click', function(){
    thermostat.resetButton();
    updateTemperature();
  });

  $('#power-save').on('click', function(){
    thermostat.powerSave();
    updateTemperature();
  });
});