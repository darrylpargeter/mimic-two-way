var expect = require('chai').expect;
var mimic = require('./index');

describe('Mimic.setValue', function() {
  var test;
  beforeEach(function() {
	test = {
	  name: 'Darryl',
	  age: 25,
	};
  });
   afterEach(function() {
	 test.name= 'Darryl';
   }), 
  it('should change the value of state', function() {
	expect(test.name).to.equal('Darryl');
	mimic.setValue(test, 'name', 'Cat');
	expect(test.name).to.equal('Cat')
  }),
  it('state should stay the same', function() {
	expect(test.name).to.equal('Darryl');
	mimic.setValue(test, 'name', 'Darryl');
	expect(test.name).to.equal('Darryl');
  })
});

describe('Mimic.getValue', function() {
  var test = {
	name: 'Rand',
	age: 20,
  };
  it('should return name: Rand', function() {
	var value = mimic.getValue(test, 'name');
	expect(value).to.equal('Rand');
  }),
  it('should return undefined if unknow key', function() {
	var value = mimic.getValue(test, 'email');
	expect(value).to.be.undefined;
  })
});
