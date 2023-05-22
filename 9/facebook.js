$("[data-toggle=popover]").popover({
    html: true,
    trigger: 'focus',
    content: function () {
        var content = $(this).attr("data-popover-content");
        return $(content).children(".popover-body").html();
    }
});

function on_change(el) {
    var selectedOption = el.target.value;
    if (selectedOption === 'customSelect') {
        document.getElementById('text').style.display = 'block';
    } else {
        document.getElementById('text').style.display = 'none'; // Hide el
    }
}