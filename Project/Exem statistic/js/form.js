const formModule = (function () {

    const $subjectInput = $('#subjectInput');
    const $nameInput = $('#inputName');
    const $gradeInput = $('#gradeInput');
    const $totalStudentsPrint = $('#totalStudents');
    const $printPassedNumber = $('#printPassedNumber');
    const $printFailedNumber = $('#printFailedNumber');
    const $printPassedStudent = $('#printPassedStudent');
    const $printFailedStudent = $('#printFailedStudent');
    const $printPassedPercent = $('#printPassedPercent');
    const $printFailedPercent = $('#printFailedPercent');
    const $liPassed = $('#li-passed');



    function collectInput() {
        const subject = $subjectInput.val();
        const name = $nameInput.val();
        const grade = $gradeInput.val();

        return {
            subject: subject,
            name: name,
            grade: grade
        }
    }

    function printAllStudent(data) {
        $totalStudentsPrint.text(data);
    }

    function printPassedNumber(data) {
        $printPassedNumber.text(data);
    }

    function printFailedNumber(data) {
        $printFailedNumber.text(data);
    }

    function printPassedStudent(data) {
        $printPassedStudent.text("");
        for (let i = 0; i < data.length; i++) {
            $printPassedStudent.append("<li class='list-group-item' id= 'li-lassed' value=" + i + ">" + data[i].subject + " - " + data[i].student + "<a href='#' id='passed-delete'>X</a> <span class='green li-right'>" + data[i].grade + "</li>");
        }

    }

    function printFailedStudent(data) {
        $printFailedStudent.text("");
        for (let i = 0; i < data.length; i++) {
            $(printFailedStudent).append("<li class='list-group-item' value=" + i + ">" + data[i].subject + " - " + data[i].student + "<a href='#' id='passed-delete'>X</a> <span class='red li-right'>" + data[i].grade + "</li>");
        }
    }

    function printPassedPercent(data) {
        $printPassedPercent.text(" ");
        $printPassedPercent.text(parseInt(data * 100) + "%");
    }

    function printFailedPercent(data) {
        $printFailedPercent.text(" ");
        $printFailedPercent.text(parseInt(data * 100) + "%");
    }

    function passedIndex() {
        return $liPassed.val();
    }

    function resetInput() {
        $subjectInput.val("");
        $nameInput.val("");
        $gradeInput.val("");
    }


    return {
        collectInput: collectInput,
        printAllStudent: printAllStudent,
        printPassedNumber: printPassedNumber,
        printFailedNumber: printFailedNumber,
        printPassedStudent: printPassedStudent,
        printFailedStudent: printFailedStudent,
        printPassedPercent: printPassedPercent,
        printFailedPercent: printFailedPercent,
        resetInput: resetInput
    }


})();