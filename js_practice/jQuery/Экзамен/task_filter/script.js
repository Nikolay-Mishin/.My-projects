$("#select-group").change(function () {
    var $tr = $("#students tbody>tr");
    if ($(this).val() != "all") {
        $tr.hide();
        $tr.filter("[data-group='" + $(this).val() + "']").show();
    } else {
        $tr.show();
    }
});

var arGroups = [];
$("#students tbody>tr").each(function () {
    if (arGroups.indexOf($(this).data("group")) == -1) {
        arGroups.push($(this).data("group"));
    }
});
arGroups.sort();
var strOptions = "<option value='all'>--- не выбрана ---</option>";
for (var i = 0; i<arGroups.length; i++) {
    strOptions += "<option value='" + arGroups[i] +
        "'> Группа" + arGroups[i] + "</option>";
}
$("#select-group").html(strOptions);