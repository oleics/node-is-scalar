
module.exports = isScalar;

// null|undefined is considered to be scalar too

function isScalar(value) {
  var type = typeof(value);
  if(type === 'string') return true;
  if(type === 'number') return true;
  if(type === 'boolean') return true;

  if(value == null) return true;
  if(value instanceof String) return true;
  if(value instanceof Number) return true;
  if(value instanceof Boolean) return true;

  return false;
}
