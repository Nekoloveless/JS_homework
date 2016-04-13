/**
 * Created by neko on 12.04.16.
 */

for(var n = 2; n < 10; n++) {

    var prime = true;
    for (var m = n - 1; m > 1; m--) {
        if (n % m == 0) {
            prime = false;
        }
    }
    if (prime) {
        console.log(n);
    }
}