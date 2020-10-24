console.log("Yes, it's being run");

$("#generateButton").click(function() {
    console.log("button clicked!");

    let input = $('programInput').val().split("x");
    let rows = input[0];
    let cols = input[1];
    console.log(rows, cols);

    for(let i = 0; i < rows; i++)
    {
        let row = $("<tr></tr>");
        for(let j = 1; j < cols; j++)
        {
            row.append(`<tr>${i*j}</tr>`)
        }
        table.append(row);
    }
    $("<tr></tr>").append("<tr></tr>")
});