const LineByLineReader = require('line-by-line'),
    lr = new LineByLineReader('./input/dataSet.csv');

lr.on('error', function (err) {
    // 'err' contains error object
});

lr.on('line', function (line) {
    // pause emitting of lines...
    lr.pause();

    // ...do your asynchronous line processing..
    setTimeout(function () {
        // ...and continue emitting lines.
        lr.resume();
    }, 100);
});

lr.on('end', function () {
    // All lines are read, file is closed now.
});
