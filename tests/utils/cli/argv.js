const {deepStrictEqual} = require('assert');
const {parseArgv} = require('../../../utils/cli/argv')

// --
deepStrictEqual(parseArgv('--a'), {_:[], a:true});
deepStrictEqual(parseArgv('--ab'), {_:[], ab:true});
deepStrictEqual(parseArgv('--a=b'), {_:[], a:'b'});
deepStrictEqual(parseArgv('--ab=cd'), {_:[], ab:'cd'});
deepStrictEqual(parseArgv('--a b'), {_:[], a:'b'});
deepStrictEqual(parseArgv('--ab cd'), {_:[], ab:'cd'});
deepStrictEqual(parseArgv('--a --d'), {_:[], a:true, d:true});
deepStrictEqual(parseArgv('--ab --cd'), {_:[], ab:true, cd:true});
deepStrictEqual(parseArgv('--a=b --c=d'), {_:[], a:'b', c:'d'});
deepStrictEqual(parseArgv('--ab=cd --ef=gh'), {_:[], ab:'cd', ef:'gh'});

// -
deepStrictEqual(parseArgv('-a'), {_:[], a:true});
deepStrictEqual(parseArgv('-ab'), {_:[], a:true, b:true});
deepStrictEqual(parseArgv('-a=bcd'), {_:[], a:'bcd'});
deepStrictEqual(parseArgv('-ab=cd'), {_:[], a:true, b:'cd'});
deepStrictEqual(parseArgv('-a b'), {_:[], a:'b'});
deepStrictEqual(parseArgv('-ab c'), {_:[], a:true, b:'c'});
deepStrictEqual(parseArgv('-a5'), {_:[], a:5});
deepStrictEqual(parseArgv('-a-b-c-d'), {_:[], a:'-b-c-d'});

//
deepStrictEqual(parseArgv('a'), {_:['a']});
deepStrictEqual(parseArgv('ab'), {_:['ab']});

// mixed
deepStrictEqual(parseArgv('-x 3 -y 4 -n5 -abc --beep=boop foo bar baz'), {
  _:['foo', 'bar', 'baz'], x:3, y:4, n:5, a:true, b:true, c:true, beep:'boop'
});