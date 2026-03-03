const fs = require('fs');

function walk(dir) {
    let results = [];
    const list = fs.readdirSync(dir);
    list.forEach(file => {
        file = dir + '/' + file;
        const stat = fs.statSync(file);
        if (stat && stat.isDirectory()) {
            results = results.concat(walk(file));
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
            results.push(file);
        }
    });
    return results;
}

const files = walk('./components');
files.forEach(file => {
    let content = fs.readFileSync(file, 'utf8');
    let newContent = content
        .replace(/<br>/g, '<br />')
        .replace(/<hr>/g, '<hr />')
        .replace(/<img(.*?[^\/])>/g, '<img$1 />')
        .replace(/<input(.*?[^\/])>/g, '<input$1 />')
        .replace(/style="([^"]*)"/g, 'style={{$1}}');

    if (content !== newContent) {
        fs.writeFileSync(file, newContent);
        console.log('Fixed ' + file);
    }
});
