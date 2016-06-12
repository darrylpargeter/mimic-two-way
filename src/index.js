module.exports = {
  /**
   * Set the value of the old state to the new state using the users input
   * @function
   * @param object object		the state/ props to be bound together
   * @param string key			the key value in the object
   * @param string value		the new value
   */
  setValue: function (object, key, value) {
    key.split('.').reduce(function(prev, current, i, keys) {
	  if (keys.length === 1) object[current] = value;
	  else if (i === 0) return object[current];
	  else if (keys.length - 1 === i) prev[current] = value;
	  else return prev[current];
	}, '');
  },
  /**
   * Get the value of an object to show as value for input tag
   * @function
   * @param object object		the state/ prop to be used to get value
   * @param string key			the key to get the value from 
   */
  getValue: function(object, key) {
     return key.split('.').reduce(function(prev, current, i, kets) {
	   if (i === 0) return object[current];
	   else return prev[current];
	 }, '');
  }
}
