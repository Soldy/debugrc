# debugrc (dabug real challange)

The debug rc is a simple agent based model debug processor 
Unlike the most of the abm my model have multiple group agent. like a manager.


##init a manager

```javascript

const debugManager =  new (require('debugrc')).debugBase();

```

##init a new agent

```javascript

const debugSubOne = debugManager.newSub('worker one');

```


##add one log 


```javascript

debugManager.log(
    'worker one', // 
    'event something to debug', // debug text
    7 // debug log level (0-9) (optional)
);

```
##short hand link function.


```javascript
// init a link 
const debug_two = debugManager.link('worker two');

// log somethineg

debug_two('idd');

```


##set console class

```javascript

debugManager.setup.set('consoleOut', console.log);

```

##set default Log Level

```javascript

debugManager.setup.set('defaultLevel',6);

```

##set current Log Level

```javascript

debugManager.setup.set('currentLevel',6);

```


##add one log 


```javascript

debugManager.log(
    'worker one', // 
    'event something to debug', // debug text
    7 // debug log level (0-9) (optional)
);

```
##shoert hand link function.


```javascript
// link to a ne
const debug_two = debugManager.link('worker two');


debug_two('first debug message');

```




