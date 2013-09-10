var stream = require('stream')
  , util = require('util')
  , os = require('os')
  , exec = require('child_process').exec
  , child;

// Give our device a stream interface
util.inherits(Device,stream);

// Export it
module.exports=Device;

/**
 * Creates a new Device Object
 *
 * @property {Boolean} readable Whether the device emits data
 * @property {Boolean} writable Whether the data can be actuated
 *
 * @property {Number} G - the channel of this device
 * @property {Number} V - the vendor ID of this device
 * @property {Number} D - the device ID of this device
 *
 * @property {Function} write Called when data is received from the Ninja Platform
 *
 * @fires data - Emit this when you wish to send data to the Ninja Platform
 */
function Device(app, opts) {

  var self = this;
  this._app = app;

  // This device will emit data
  this.readable = true;
  // This device cannot be actuated
  this.writeable = false;

  this.G = "0"; // G is a string a represents the channel
  this.V = 0; // 0 is Ninja Blocks' device list
  this.D = 521; // 2000 is a generic Ninja Blocks sandbox device
  this.name = 'RAM@' + os.hostname() + ' (% use)';

  var real_poll_interval = opts.poll_interval * 1000;

  process.nextTick(function() {

    setInterval(function() {

    var execcmd = 'free | grep \'Mem:\' | awk \'{percent=100*($3/$2); printf \"%3d\", percent}\''
    child = exec(execcmd,
    function (error, stdout, stderr) {
      stdout.replace(/(\n|\r|\r\n)$/, '');
      self._app.log.debug('[ninja-mem] Free RAM: %s, updating every %s seconds', stdout, opts.poll_interval);
      self.emit('data',stdout);
      });
    }, real_poll_interval);
  });
};

/**
 * Called whenever there is data from the Ninja Platform
 * This is required if Device.writable = true
 *
 * @param  {String} data The data received
 */
Device.prototype.write = function(data) {

  // I'm being actuated with data!
  self._app.log.error('[ninja-mem] Was actuated but should not have been');
};
