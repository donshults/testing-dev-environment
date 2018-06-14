
import chalk from 'chalk';
 
const commonModule = function (){
  console.log(chalk.green('Running from Common Module')); //eslint-disable-line no-console
};

export default commonModule;
