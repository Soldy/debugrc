const poolrcBase = (require('poolrc')).poolrc;
const setupBase = (require('setuprc')).setupBase;
const ic = new (require('interactiveConsole')).console();

const consoleOut = function(name, log){
    ic.printLn(
        ic.style(
            '['+name+']',
            {color: 'green'}
        ) + log
    );
};
let defaultLevel = 5;
let currentLevel = 5;
const debugSubBase = function(nameIn, settings){
    this.log = function(log, level){
        if(typeof level === 'undefined')
            level = defaultLevel;
        let time = (+new Date);
        pool.add({
               time,
               log,
               level
        });
        if(level > currentLevel)
            consoleOut(name, log);
    }
    let name = nameIn;
    let setup = new setupBase({
        'poolSize':{
            'type'    : 'integer',
            'min'     : 1,
            'max'     : 99999,
            'default' : 400
        }
    });
    if(typeof settings !== 'undefined')
        setup.setup(settings);
    let pool = new poolrcBase(setup.get('poolSize');
}

const debugBase = function(settings){
    this.newSub = function(name){
        return newSub(name);
    }
    this.sub = function(name){
        return subs[name];
    }
    this.link = function(name){
        newSub(name);
        return subs[name].log;
    }
    this.setup = function(){
        return setup;
    };
    let newSub = function(name){
        if(typeof subs[name] === 'undefined')
            subs[name] = new debugSubBase(name);
        return subs[name];
    }
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

}

exports.debugBase = debugBase;
