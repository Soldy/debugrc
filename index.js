const $poolrcBase = (require('poolrc')).base;
const $setupBase = (require('setuprc')).setupBase;
const $ic = new (require('interactiveConsole')).console();

const consoleOut = function(name, log){
    $ic.printLn(
        $ic.style(
            '['+name+']',
            {color: 'green'}
        )  + log
    );
};
let defaultLevel = 5;
let currentLevel = 5;
const debugSubBase = function(settings){
    this.log = function(log, level){
        if(typeof level === 'undefined')
            level = defaultLevel;
        const time = (+new Date);
        _pool.add({
            time,
            log,
            level
        });
        if(level > currentLevel)
            consoleOut(
                _setup.get('name'),
                log
            );
    };
    this.all = function(){
         return _pool.all();
    }
    const _setup = new setupBase({
        'name' : {
            'type'    : 'string',
            'default' : 'debug'
        },
        'poolSize':{
            'type'    : 'integer',
            'min'     : 1,
            'max'     : 99999,
            'default' : 400
        },
        'level' : {
            'type' : 'integer',
            'min'  : 0,
            'max'  : 9

        }
    });
    if(typeof settings_in !== 'undefined')
        _setup.setup(settings_in);
    const _pool = new $poolrcBase(
        _setup.get('poolSize')
    );
};

const debugBase = function(settings){
    this.newSub = function(name){
        return newSub(name);
    };
    this.sub = function(name){
        return subs[name];
    };
    this.link = function(name){
        newSub(name);
        return subs[name].log;
    };
    this.setup = function(){
        return setup;
    };
    let newSub = function(name){
        if(typeof subs[name] === 'undefined')
            subs[name] = new debugSubBase(name);
        return subs[name];
    };
    let setup = new setupBase({
        'defaultLevel':{
            'type'    : 'integer',
            'min'     : 0,
            'max'     : 0,
            'default' : 5
        },
        'currentLevel':{
            'type'    : 'integer',
            'min'     : 0,
            'max'     : 0,
            'default' : 5
        },
        'consoleOut':{
            'type'    :'function',
            'default' :consoleOut
        }
    });
    let subs = {};

    if(typeof settings !== 'undefined')
        setup.setup(settings);

};

exports.debugBase = debugBase;
