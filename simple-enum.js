/**
 * This is a helper for creating ENUMs.
 * @param [String] items ENUM items
 * @return An object that supports both forward and reversed lookup.
 * Use `result[ENUM]` to get the name of the ENUM value.
 * Use `result.ENUM[name]` to get the ENUM value of the name.
 **/

SimpleENUM = function(items) {
  var i, item, j, len, result;
  result = [];
  result.ENUM = {};
  for (i = j = 0, len = items.length; j < len; i = ++j) {
    item = items[i];
    result[i] = item;
    result.ENUM[item] = i;
  }
  return result;
};
