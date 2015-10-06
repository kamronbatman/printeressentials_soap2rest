var url = require('url');
    _   = require('lodash');

/**
 * Removes keys that are listed. Can recurse and perform the removal on nested objects
 * @param  {Object}   target   The object targeted for key filtering
 * @param  {Array}    keyList  Array of keys to remove
 * @param  {Boolean}  recurse  If true, will recurse through nested objects
 * @return {Object} The transformed object with the keys stripped
 */
module.exports.removeKeys = function(target, keyList, recurse) {
  return _.transform(target, function(r, v, k, t) {
    if (_.indexOf(keyList, k) === -1) {
      if (_.isPlainObject(v) && recurse) {
        r[k] = module.exports.removeKeys(t[k], keyList, recurse);
      } else { r[k] = v; }
    }
  });
};