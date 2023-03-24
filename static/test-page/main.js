function handleClick() {
    console.log(` - button is clicked`)
    $.ajax({
        url: "/embedded",
        success: function(html) {
            console.log(` - loaded successfully`)
            $("#svelte-target").html(html)
        }
    })
}
$(document).ready(function() {
    console.log(`ready`)
});