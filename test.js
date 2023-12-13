const nanoTest  = new (require('nanoTest')).test({
    'progress_bar' : false,
    'debug_print'  : 'short'
});

const debugManager =  new(require('./index.js')).debugBase();


let debugSub = "";
let debugLink = "";


nanoTest.add(
    'init',
    {
       'function':function(){
           debugSub = debugManager.newSub('test');
           return true;
       }
    },
    '===',
    true
);

nanoTest.add(
    'log',
    {
       'function':function(){
           debugSub.log('test one');
           return true;
       }
    },
    '===',
    true
);

nanoTest.add(
    'link',
    {
       'function':function(){
           debugLink = debugManager.link('test one');
           return true;
       }
    },
    '===',
    true
);
nanoTest.add(
    'link',
    {
       'function':function(){
           debugLink = debugManager.link('test one');
           return true;
       }
    },
    '===',
    true
);



nanoTest.run();
