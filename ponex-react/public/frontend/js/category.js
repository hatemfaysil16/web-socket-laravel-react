//START GET CITY
$('#category').on('change', function () {
    var category_id = $('#category').val();
    var subcategory_id = $('#subcategory').val();
    getCities(category_id, subcategory_id);
});
function getCities(category_id, subcategory_id) {
    if (category_id) {
        $.ajax({
            url: $('#url').val()+"AjaxSubCategory/" + category_id,
            type: "GET",
            data: {
                "_token": "{{ csrf_token() }}",
                category_id: category_id,
            },
            dataType: "json",
            success: function (data) {
                if (data) {
                    $('#subcategory').empty();
                    $('#subcategory').focus;
                    $('#subcategory').append('<option value="">-- Select City --</option>');

                    $.each(data, function (key, value) {
                        if($('#language').val()=='en'){
                        var   $Newname = value.name.en;
                        }else if($('#language').val()=='ar'){
                        var  $Newname = value.name.ar;
                        } 
                        select = '<option value="' + value.id + '"' + 'selected' + '>' + $Newname + '</option>';
                        $('#subcategory').append(select);
                    });
                } else {
                    $('#subcategory').empty();
                }
            }
        });
    } else {
        $('#subcategory').empty();
    }
}
// END GET CITY