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
    })
  });

  describe("minimum and maximum temp", function(){
    it("should have a maximum of 32 degrees", function(){

    })

    it("should have a minimum of 10 degrees", function(){
      
    })

  })

});