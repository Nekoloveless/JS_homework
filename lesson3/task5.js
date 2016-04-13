/**
 * Created by neko on 12.04.16.
 */
var result = "";
for (var row = 1; row <= 8; row++) {
    if (row % 2 == 0) {
        for (var cell = 1; cell <= 8; cell++) {
            result +=(cell % 2 == 0) ? " " : "#";

        }
    }
    else {
        for (var cell = 1; cell <= 8; cell++) {
            result += (cell % 2 == 0) ? "#" : " ";

        }
    }
    result += "\n";
}
console.log(result);