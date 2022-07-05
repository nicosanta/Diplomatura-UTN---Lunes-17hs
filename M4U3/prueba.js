let moment = require('moment');
moment.locale('es');
console.log('Naci ' + moment('19/04/1994', 'DD/MM/YYYY').fromNow());