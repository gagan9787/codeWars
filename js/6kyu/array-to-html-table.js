// Overview
// The task is simple - given a 2D array (list), generate an HTML table representing the data from this array.

// You need to write a function called to_table/toTable, that takes three arguments:

// data - a 2D array (list),
// headers - an optional boolean value. If True, the first row of the array is considered a header (see below). Defaults to False,
// index - an optional boolean value. If True, the first column in the table should contain 1-based indices of the corresponding row. If headers arguments is True, this column should have an empty header. Defaults to False.
// and returns a string containing HTML tags representing the table.
// Details
// HTML table is structured like this:
// <table>
//   <thead>                 <!-- an optional table header -->
//     <tr>                  <!-- a header row -->
//       <th>header1</th>    <!-- a single header cell -->
//       <th>header2</th>
//     </tr>
//   </thead>
//   <tbody>                 <!-- a table's body -->
//     <tr>                  <!-- a table's row -->
//       <td>row1, col1</td> <!-- a row's cell -->
//       <td>row1, col2</td>
//     </tr>
//     <tr>
//       <td>row2, col1</td>
//       <td>row2, col2</td>
//     </tr>
//   </tbody>
// </table>
// The table header is optional. If header argument is False then the table starts with <tbody> tag, ommiting <thead>.

// So, for example:

// toTable([["lorem", "ipsum"], ["dolor", "sit amet"]], true, true)
// returns

// "<table><thead><tr><th></th><th>lorem</th><th>ipsum</th></tr></thead><tbody><tr><td>1</td><td>dolor</td><td>sit amet</td></tr></tbody></table>"
// As you can see, no linebreaks or whitespaces (except for the ones present in the array values) are included, so the HTML code is minified.

// IMPORTANT NOTE: if the value in the array happens to be None, the value of the according cell in the table should be en ampty string ("")! Otherwise, just use a string representation of the given value, so, dependent on the language, the output can be slightly different. No additional parsing is needed on the data.

// Additional info
// For your convenience, there is a preloaded function esc_html/escHtml that takes a string with HTML tags and escape them; it is necessary if you want to use print/console.log on your resulting strings, elsewise Codewars processes HTML tags, so they appear invisible in the stdout.

// Test cases will always provide valid data, that is - up to three arguments, first a NxM array (list) with N and M > 0, second and third a boolean. The values in the array will always be either string, number, bool or None/null.

// For more examples, see test cases.





function toTable(data, headers = false, index = false) {
  let head = "";
  let body = "";
  if (headers) {
    let th = "";
    data[0].forEach((element) => {
      th += `<th>${element}</th>`;
    });

    if (th != "") {
      head += `<thead><tr>${index == true ? "<th></th>" : ""}${th}</tr></thead>`;
    }
  }
  const rowData = headers == true ? data.slice(1) : data;
  let tr = "";
  let count = 0;
  rowData.forEach((element) => {
    let td = "";
    let tcount = "";
    element.forEach((element1) => {
      td += `<td>${element1 == null ? "" : element1}</td>`;
    });
    if (index == true) {
      count++;
      tcount += `<td>${count}</td>`;
    }
    tr += `<tr>${index == true ? tcount : ""}${td}</tr>`;
    td = "";
  });

  if (tr != "") {
    body += `<tbody>${tr}</tbody>`;
  }
  const html = `<table>${head}${body}</table>`;
  return html;
}

console.log(
  toTable(
    [ [ 94 ], [ false ], [ null ] ],
    false,
    true,
  ),
);
