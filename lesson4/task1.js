/**
 * Created by neko on 19.04.16.
 */
function fib(n) {
    var n1=0;
    var n2=1;
    var result;
    for (var i = 1; i<n; i++) {
        result=n1+n2;
        n1=n2;
        n2=result;
    }
    console.log(result);
}
fib(77);
