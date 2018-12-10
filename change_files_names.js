const fs = require('fs');
let path = './../../../Desktop/Mexico_2018/2';

fs.readdir(path, function(err, files) {
    if (err) {
        console.log(err)
    }
    files.forEach(file => {
        if (!file.includes('jpg')) {
            let newName = file.split('.')[0] + '.jpg';
            console.log(newName);
            fs.rename(path + '/' + file, path + '/' + newName, (error) => {
                if (error) {
                    console.log(error)
                } else {
                    console.log('Rename complete!');
                };
            });
        }
    })
})
