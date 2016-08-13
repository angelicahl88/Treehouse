'use strict';
    const student = { name: 'James' };
(function() {
    
    
    function createStudent(name) {
        let student = { name: name };
        return student;
    }
    
    console.log(createStudent('Ken'));
    console.log(student);
})();