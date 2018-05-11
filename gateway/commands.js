const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const getVolume = value => {
  const shellCmd = './scripts/get_volume.sh';
  return exec(shellCmd).then((err, stdout) => err || stdout);
}

const setVolume = value => {
  const shellCmd = './scripts/set_volume.sh';
  const env = { VOLUME_VALUE: value };

  return exec(shellCmd, { env }).then((err, stdout) => err || stdout);
}

module.exports = {
  setVolume,
  getVolume
};
