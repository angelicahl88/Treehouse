'use strict';

const student = { name: 'Mr Bond', followerCount: 34 };

let tableHtml = `
  <table class="table">
    <thead>
      <tr>
        <td>Name</td>
        <td>Followers</td>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>${student.name}</td>
        <td>${student.followerCount}</td>
      </tr>
    </tbody>
  </table>`;

let beeds = `Hello ${student.name}`;

console.log(tableHtml);
console.log(beeds);