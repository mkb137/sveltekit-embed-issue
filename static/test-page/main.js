function handleClick() {
    console.log(` - button is clicked`)
    $.ajax({
        url: "/embedded",
        success: function(html) {
            console.log(` - loaded successfully`)
            // Replace some scripts to prevent them from firing
            //html = html.replace("start.js", "start.js.fail")
            // Load the HTML
            $("#svelte-target").html(html)
        }
    })
}
$(document).ready(function() {
    console.log(`ready`)
});