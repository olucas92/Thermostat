describe("Thermostat", function(){

  var thermostat;

  beforeEach(function() {
    thermostat = new Thermostat();
  });

describe("by default", function(){

  it("starts at 20 degrees", function (){
    expect(thermostat.temperature).toEqual(20);
  });
});

describe("changing temperature", function(){
  it("can increase", function(){
    thermostat.increaseTemperature(1);
    expect(thermostat.temperature).toEqual(21);
  });
  it("can decrease", function(){
    thermostat.decreaseTemperature(1);
    expect(thermostat.temperature).toEqual(19);
  });
});

describe("minimum and maximum temp", function(){
  it("should have a maximum of 32 degrees", function(){
    thermostat.powerSave = false
    expect(thermostat.maximumTemp()).toEqual(32)
  });

  it("should have a minimum of 10 degrees", function(){
    expect(thermostat.minimumTemp).toEqual(10)
  });

  it("should not be able to go beneath 10 degrees", function(){
    thermostat.decreaseTemperature(23)
    expect(thermostat.temperature).toEqual(10)
  });

  it("should not be able to go above 25 degrees when power save is on", function(){
    thermostat.powerSave = true
    thermostat.increaseTemperature(15)
    expect(thermostat.temperature).toEqual(25)
  });

  it("should not be able to go above 32 degrees when power save is off", function(){
    thermostat.powerSave = false
    thermostat.increaseTemperature(20)
    expect(thermostat.temperature).toEqual(32)
  });

});

describe("reset button", function(){
    
  it("should reset temperature to 20 degrees", function(){
    thermostat.resetButton;
    expect(thermostat.temperature).toEqual(20)
  });

});

describe("power save mode", function(){

  it("should set a limit of 25 degrees when on", function(){
    thermostat.powerSave = true
    expect(thermostat.maximumTemp()).toEqual(25)
  });

  it("should have a limit of 32 degrees when off", function(){
    thermostat.powerSave = false
    expect(thermostat.maximumTemp()).toEqual(32)
  });
     
});

describe("thermostat power usage colour coordination", function(){

  it("should be red when 25 degrees or over", function(){
    thermostat.increaseTemperature(5)
    thermostat.temperatureColour()
    expect(thermostat.energyColour).toEqual("red")
  });

  it("should be green when between 19 and 24 degrees", function(){
    thermostat.increaseTemperature(1)
    thermostat.temperatureColour()
    expect(thermostat.energyColour).toEqual("green")
  });

  it("should be blue when 18 degrees or below", function(){
    thermostat.decreaseTemperature(5)
    thermostat.temperatureColour()
    expect(thermostat.energyColour).toEqual("blue")
  });
});

  // describe("")

});