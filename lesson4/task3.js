/**
 * Created by neko on 20.04.16.
 */
function checkLength(str){
    if (str.length <= 20) {
        console.log(str);
    }
    else {
        str=str.substring(0,20);
        console.log(str + '...');
    }
}
checkLength('Напишите функцию, которая принимает на вход строку и возвращает ее неизменной если ее длина не превышает 20 символов.')