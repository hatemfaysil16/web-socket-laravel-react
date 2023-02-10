//START GET CITY
$('#subcategory').on('change', function () {
    var subcategory_id = $('#subcategory').val();
    var SubSubCategory_id = $('#subsubCategory').val();
    GetSubSubCategory(subcategory_id,SubSubCategory_id);
});
function GetSubSubCategory(subcategory_id, SubSubCategory_id) {
    if (subcategory_id) {
        $.ajax({
            url: $('#url').val()+"AjaxSubSubCategory/" + subcategory_id,
            type: "GET",
            data: {
                "_token": "{{ csrf_token() }}",
                subcategory_id: subcategory_id,
            },
            dataType: "json",
            success: function (data) {
                if (data) {
                    $('#subsubCategory').empty();
                    $('#subsubCategory').focus;
                    $('#subsubCategory').append('<option value="">-- Select City --</option>');

                    $.each(data, function (key, value) {
                        if($('#language').val()=='en'){
                        var   $Newname = value.name.en;
                        }else if($('#language').val()=='ar'){
                        var  $Newname = value.name.ar;
                        } 
                        select = '<option value="' + value.id + '"' + 'selected' + '>' + $Newname + '</option>';
                        $('#subsubCategory').append(select);
                    });
                } else {
                    $('#subsubCategory').empty();
                }
            }
        });
    } else {
        $('#subsubCategory').empty();
    }
}
// END GET CITY