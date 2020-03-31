let options = {
    width: 1333,
    height: 768,
    background: 'red',
    font: {
        size: '16px',
        color: '#fff'
    }
};


console.log(JSON.stringify(options));
console.log(JSON.parse(JSON.stringify(options)));