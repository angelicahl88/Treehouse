'use strict';

let followerCount = 34;

let tableHTML = [
    '<table class="table">',
    '<thead>',
    '<tr>',
    '<td>Name</td>',
    '<td>Followers</td>',
    '</tr>',
    '</thead>',
    '<tbody>',
    '<tr>',
    '<td>James</td>',
    '<td>' + followerCount + '<td>',
    '</tr>',
    '</tbody>',
    '</table>'
].join("\n");

console.log(tableHTML);