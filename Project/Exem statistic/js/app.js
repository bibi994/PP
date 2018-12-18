const appModule = (function (subjectModule, studentModule, examModule, formModule) {

    $addButton = $('#addButton');
    $passedRemove = $('#passed-delete');
    $failedRemove = $('#failed-delete');


    $addButton.on("click", collectFormInput);
    // $passedRemove.on( "click", removePassed);


    function collectFormInput() {
        const collectInput = formModule.collectInput();

        const subject = subjectModule.createSubject(collectInput.subject);
        subjectModule.addSubject(subject);

        const student = studentModule.createStudent(collectInput.name);
        studentModule.addStudent(student);

        const exam = examModule.createExam(subject.subject, student.name, collectInput.grade);
        examModule.addExam(exam);

        formModule.printAllStudent(studentModule.numberOfStudents());

        formModule.printPassedNumber(examModule.numberOfPassed());
        formModule.printFailedNumber(examModule.numberOfFailed());

        formModule.printPassedStudent(examModule.getPassedList());
        formModule.printFailedStudent(examModule.getFailedList());

        formModule.printPassedPercent(examModule.getPassedPercent());
        formModule.printFailedPercent(examModule.getFailedPercent());

        formModule.resetInput();

    }

    $('#printPassedStudent').on('click', "#passed-delete", function () {
        const index = $(this).parent().val();
        $(this).parent().remove();
        examModule.removePassed(index);
    });


})(subjectModule, studentModule, examModule, formModule);