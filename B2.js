function rot90Clock(strng) {
    let splitLines = strng.split('\n')
    let result = Array.from({length: splitLines[0].length}, (_, i) => {
        return Array.from({length: splitLines.length}, (_, j) => {
            return splitLines[j][i]
        }).reverse().join('')
    })
    return result.join('\n')
}

function diag1Sym(strng) {
    const lines = s.split('\n');
    const result = Array.from({length: lines.length}, (_, i) => {
        return Array.from({length: lines.length}, (_, j) => {
            return lines[j][i]
        }).join('')
    })
    return result.join('\n');
}

function selfieAndDiag1(strng) {
    const lines = s.split('\n');
    const result = lines.map((line, i) => line + '|' + diag1Sym(s).split('\n')[i]).join('\n');
    return result;
}

function oper(fct, s) {
    return fct(s);
}


function main() {
    console.log(rot90Clock("rgavce\nvGcEKl\ndChZVW\nxNWgXR\niJBYDO\nSdmEKb"))
}

main()