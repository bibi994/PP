const examModule = (function () {

    const storage = {
        listOfExams: [],
        listOfPassed: [],
        listOfFailed: []
    }

    function Exam(subject, student, grade) {
        this.subject = subject;
        this.student = student;
        this.grade = grade;
    }

    Exam.prototype.getExamInfo = function () {
        return (this.subject + ", " + this.student + ", " + this.grade);
    }

    function createExam(subject, student, grade) {
        return new Exam(subject, student, grade);
    }

    function addExam(exam) {
        storage.listOfExams.push(exam);
        if (exam.grade >= 6) {
            storage.listOfPassed.push(exam);

        } else {
            storage.listOfFailed.push(exam);
        }
    }
    // Number in header
    function numberOfPassed() {
        return storage.listOfPassed.length;
    }

    function numberOfFailed() {
        return storage.listOfFailed.length;
    }

    // print list
    function getPassedList() {
        return storage.listOfPassed;

    }

    function getFailedList() {
        return storage.listOfFailed;
    }

    //Print percent

    function getPassedPercent() {
        return storage.listOfPassed.length / storage.listOfExams.length;
    }

    function getFailedPercent() {
        return storage.listOfFailed.length / storage.listOfExams.length;
    }

    function removePassed(index) {
        listOfPassed.splice(index, 1);
        return listOfPassed;
    }

    return {
        createExam: createExam,
        addExam: addExam,
        numberOfPassed: numberOfPassed,
        numberOfFailed: numberOfFailed,
        getPassedList: getPassedList,
        getFailedList: getFailedList,
        getPassedPercent: getPassedPercent,
        getFailedPercent: getFailedPercent,
        removePassed: removePassed
    }


})(); 