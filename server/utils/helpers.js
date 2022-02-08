//
import moment from 'moment';


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
