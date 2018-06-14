/* eslint-disable no-console */
import './index.css';

import numeral from 'numeral';
import commonModule from './common/commonModule';

const courseValue = numeral(1000).format('$0,0.00');
//debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);

var mytest = function testfunct (){
    console.log("Go for it");
}
commonModule();
mytest();
