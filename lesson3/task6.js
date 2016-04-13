/**
 * Created by neko on 13.04.16.
 */
function pow(x, n) {
    var result = x;
    for (var i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}
pow(5, 3)