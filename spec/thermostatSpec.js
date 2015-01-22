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
      expect(thermostat.maximumTemp).toEqual(32)
    });

    it("should have a minimum of 10 degrees", function(){
      expect(thermostat.minimumTemp).toEqual(10)
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
      thermostat.powerSave
      expect(thermostat.maxTempPowerSave).toEqual(25)
    });

    it("should have a limit of 32 degrees when off", function(){
      powerSave = false
      expect(thermostat.maximumTemp).toEqual(32)
    });
     
  });

});