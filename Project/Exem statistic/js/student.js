const studentModule = (function(){

    const storage = {
        studentList: [],

    }
    function Student(name){
        this.name = name;
    }

    Student.prototype.getStudentData  = function(){
        const ime = this.name.split(" ")[0];
        const prezime = this.name.split(" ")[1];

        return (ime + ", " + prezime);

    }

    function createStudent(name) {
        return new Student(name);
    }

    function addStudent(name) {
        storage.studentList.push(name);
    }

    function numberOfStudents() {
        return storage.studentList.length;

    }

    return{
        createStudent: createStudent,
        addStudent: addStudent,
        numberOfStudents: numberOfStudents
    }

})();