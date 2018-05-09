const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

const volume = value => {
  const shellCmd = `amixer set PCM -- ${value}%`;
  return exec(shellCmd).then((err, stdout) => err || stdout);
}

module.exports = {
  volume
};
