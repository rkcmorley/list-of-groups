$(document).ready(function() {
    $('#example').DataTable( {
        "ajax": "data/admin.txt",
        language: { search: "",
        "searchPlaceholder": "Search" },

      'columnDefs': [{
      	'targets': 0,
         'render': function (data, type, full, meta){
             return '<input type="checkbox" name="id[]" class="regular-checkbox" value="' + $('<div/>').text(data).html() + '">';
         }
      }],

  bAutoWidth: false , 
  aoColumns : [
    { sWidth: '5%' },
    { sWidth: '10%' },
    { sWidth: '10%' },
    { sWidth: '10%' },
    { sWidth: '50%' }
  ]

} );
} );