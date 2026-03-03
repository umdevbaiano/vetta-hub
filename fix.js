const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, 'components/sections');
const files = ['Dashboard.tsx', 'Servicos.tsx', 'InfraVisual.tsx', 'Stack.tsx'];

files.forEach(f => {
    const p = path.join(dir, f);
    if (!fs.existsSync(p)) return;
    let text = fs.readFileSync(p, 'utf8');

    // 1. Fix opening __html: \` to __html: `
    text = text.replace(/__html:\s*\\`/g, '__html: `');

    // 2. Fix closing \`}} /> to `}} />
    text = text.replace(/\\`\s*\}\}\s*\/>/g, '`}} />');

    // 3. Convert any \\\` to \` and \\\${ to \${ (Fixing the triple escaped ones)
    text = text.replace(/\\\\\\`/g, '\\`');
    text = text.replace(/\\\\\\\$/g, '\\$');

    // 4. Convert the bare ones I mistakenly replaced in Dashboard.tsx back to single escaped
    text = text.replace(/logo\.style\.transform\s*=\s*`translate\(\$\{dx\}px,\$\{dy\}px\)\s+scale\(0\.26\)`/g,
        'logo.style.transform  = \\`translate(\\${dx}px,\\${dy}px) scale(0.26)\\`');

    text = text.replace(/emblem\.style\.transform\s*=\s*`translate\(\$\{dx\s*-\s*60\}px,\$\{dy\}px\)\s+scale\(0\.22\)`/g,
        'emblem.style.transform  = \\`translate(\\${dx - 60}px,\\${dy}px) scale(0.22)\\`');

    text = text.replace(/px1\.style\.transform\s*=\s*`translateY\(\$\{y\*\.28\}px\)`/g,
        'px1.style.transform = \\`translateY(\\${y*.28}px)\\`');
    text = text.replace(/px2\.style\.transform\s*=\s*`translateY\(\$\{y\*\.18\}px\)`/g,
        'px2.style.transform = \\`translateY(\\${y*.18}px)\\`');
    text = text.replace(/px3\.style\.transform\s*=\s*`translateY\(\$\{y\*\.35\}px\)`/g,
        'px3.style.transform = \\`translateY(\\${y*.35}px)\\`');

    text = text.replace(/node\.id\s*=\s*`onode-\$\{item\.id\}`/g,
        'node.id = \\`onode-\\${item.id}\\`');

    // Handle node.innerHTML = ` by checking if it's not already escaped
    text = text.replace(/node\.innerHTML\s*=\s*`\s*(<div class="on-dot"|<div className="on-dot")/g,
        'node.innerHTML = \\`\n      <div className="on-dot"');

    text = text.replace(/<div className="on-label">\$\{item\.label\}<\/div>`/g,
        '<div className="on-label">\\${item.label}</div>\\`');

    text = text.replace(/document\.getElementById\(`onode-\$\{item\.id\}`\)/g,
        'document.getElementById(\\`onode-\\${item.id}\\`)');

    text = text.replace(/document\.getElementById\(`onode-\$\{id\}`\)/g,
        'document.getElementById(\\`onode-\\${id}\\`)');

    // Fix duplicated lines in Servicos.tsx like:
    // logo.style.transform  = \`translate(\${dx}px,\${dy}px) scale(0.26)\`;
    // logo.style.transform  = `translate(${dx}px,${dy}px) scale(0.26)`;
    text = text.replace(/logo\.style\.transform\s*=\s*\\`translate\(\\\$\{dx\}px,\\\$\{dy\}px\)\s+scale\(0\.26\)\\`;\s*logo\.style\.transform\s*=\s*`translate\(\$\{dx\}px,\$\{dy\}px\)\s+scale\(0\.26\)`;/g,
        'logo.style.transform  = \\`translate(\\${dx}px,\\${dy}px) scale(0.26)\\`;');

    fs.writeFileSync(p, text);
});
console.log('Fixed scripts');
