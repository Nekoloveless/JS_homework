/**
 * Created by neko on 13.04.16.
 */
function number(x){
    if (x % 2 == 0){
        return ("even");
    }
    else if (x % 2 == 1) {
        return ("odd");
    } else {
        return ("Not a number");
    }
}
number (6)