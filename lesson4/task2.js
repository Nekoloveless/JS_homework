/**
 * Created by neko on 20.04.16.
 */
function checkSpam(str) {
    str=str.toLowerCase();
    if ((str.indexOf('sex') != -1) || (str.indexOf('spam') != -1)) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
checkSpam('[SPAM] How to earn fast money?');
