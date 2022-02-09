//
// import moment from 'moment'; //this does not work. we cannot import outside module
const moment = require('moment');


module.exports = {
    // taking in a date to render
    dateFormat: function(date){
        return moment(date).format("MMM Do YYYY");  
    },
    // today's date
    get_date: function(){
        return moment().format("MMM Do YYYY");  
    }
};
