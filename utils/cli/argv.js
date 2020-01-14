const letters = 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz';

function parseArgv(input = '') {
  const argv = typeof input === 'string' ? input.split(' ') : input;
  const args = {_:[]};

  let index = 0;

  const next = () => argv[index + 1];
  const isParam = str => str.startsWith('-');
  const isLetter = char => letters.includes(char);
  const cast = char => {
    if (char === 'true') return true;
    if (char === 'false') return false;
    if (+char) return +char;
    return char;
  }

  main: while (index < argv.length) {
    const arg = argv[index];

    if (arg.startsWith('--')) {
      if (arg.includes('=')) {
        const [key, value] = arg.substr(2).split('=');
        args[key] = cast(value);
      } else if (next() && !isParam(next())) {
        args[arg.substr(2)] = cast(next());
        index += 2;
        continue;
      } else {
        args[arg.substr(2)] = true;
      }
    }

    else if (arg.startsWith('-')) {
      const tokens = arg.substr(1).split('');
      let j = 0;

      while (j < tokens.length) {
        const key = tokens[j];
        args[key] = true;

        if (j === tokens.length - 1) {
          if (next() && !isParam(next())) {
            args[key] = cast(next());
            index += 2;
            continue main;
          }

          break;
        }

        if (tokens[j+1] === '=') {
          args[key] = cast(tokens.slice(j+2).join(''));
          break;
        }

        if (!isLetter(tokens[j+1])) {
          args[key] = cast(tokens.slice(j+1).join(''));
          j += 1 + args[key].length;
          continue;
        }

        j++;
      }
    }

    else {
      args._.push(arg);
    }

    index++;
  }

  return args;
}

module.exports = {
  parseArgv,
}