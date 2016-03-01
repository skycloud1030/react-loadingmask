# react-loadingmask
react-loadingmask

## Install

```
npm i --save react-loadingmask
```

## Demo

[compomentMask](http://skycloud1030.github.io/react-loadingmask/example/compomentMask.html)

[globalMask](http://skycloud1030.github.io/react-loadingmask/example/globalMask.html)

## Usage

compomentMask <br/>
```
import {LoadingMask} from 'react-loadingmask';
require('../css/loadingMask.css');

<LoadingMask state={true}>
  <div style={{width:500,height:300}}>
    Compoment You want to display
  </div>
</LoadingMask>
```

globalMask <br/>
```
import {LoadingMask} from 'react-loadingmask';
require('../css/loadingMask.css');

<div>
  <LoadingMask state={true}/>
  <div style={{width:500,height:300}}>
    Compoment You want to display
  </div>
</div>
```

## License

```
MIT
```
