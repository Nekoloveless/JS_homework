/**
 * Created by neko on 12.04.16.
 */
for(var n=1; n<=100; n++) {
    if (n % 3 == 0) {
        console.log ('Fizz')
        continue;
    };
    if (n % 5 == 0) {
        console.log ('Buzz')
        continue;
    }
    console.log(n);
}