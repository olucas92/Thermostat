var thermostat = new Thermostat();

var updateTemperature = function(){
  $('#temperature').text(thermostat.temperature)
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
});