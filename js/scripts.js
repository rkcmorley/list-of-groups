$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "data/data.txt",
        language: { search: "",
        "searchPlaceholder": "Search" },

        "createdRow": function ( row, data, index ) {
            $(row).addClass(data[1]);                          
        }   	
} );
} );