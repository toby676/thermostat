'use strict';

describe("Thermostat", function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("increases temperature with the up button", function(){
    thermostat.increaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
  });

  it("decreases temperature with the up button", function(){
    thermostat.decreaseTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
  });

  it("has a minimum temperature of 10 degrees", function(){
    for(var i = 0; i < 11; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it("has power saving mode on by default", function(){
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("can switch off power saving mode", function(){
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
  });

  it("can switch on power saving mode", function(){
    thermostat.switchPowerSavingModeOff();
    thermostat.switchPowerSavingModeOn();
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it("when power saving mode on, max temperature is 25 degrees", function(){
    for(var i = 0; i < 6; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(25);
  });

  it("when power saving mode off, max temperature is 32 degrees", function(){
    thermostat.switchPowerSavingModeOff();
    for(var i = 0; i < 13; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(32);
  });

  it("can be reset to 20 by clicking the reset button", function(){
    thermostat.increaseTemperature();
    thermostat.resetTemperature();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it("display is green when temperate below 18", function() {
    for(var i = 0; i < 3; i++) {
      thermostat.decreaseTemperature();
    }
    expect(thermostat.colour()).toEqual("Green");
  });

  it("display is yellow when temperate below 25 but above 17", function() {
    expect(thermostat.colour()).toEqual("Yellow");
  });

  it("display is red when temperate above 24", function() {
    for(var i = 0; i < 5; i++) {
      thermostat.increaseTemperature();
    }
    expect(thermostat.colour()).toEqual("Red");
  });



});
