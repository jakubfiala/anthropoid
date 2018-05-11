const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const getVolume = value => {
  const shellCmd = 'bash ./scripts/get_volume.sh';
  return exec(shellCmd).then(({ stdout }) => stdout);
}

const setVolume = value => {
  const shellCmd = 'bash ./scripts/set_volume.sh';
  const env = { VOLUME_VALUE: value };

  return exec(shellCmd, { env }).then(({ stdout }) => stdout);
}

const getStats = value => {
  const shellCmd = 'bash ./scripts/get_stats.sh';
  return exec(shellCmd).then(({ stdout }) => stdout);
}

module.exports = {
  setVolume,
  getVolume,
  getStats
};
