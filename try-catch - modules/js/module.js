import {constants} from './constants.js';
import {login as loginExterno} from './login.js';

console.log(constants.user);
loginExterno(constants.user,constants.password);

function login(){
    console.log("hola");
}
