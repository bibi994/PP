const subjectModule = (function(){

    const storage = {
        subjectList: []
    }

    function Subject(subject){
        this.subject = subject;
    }

    Subject.prototype.getSubjectName = function(){
        return this.subject
    }

    function createSubject(subject) {
        return new Subject(subject);
    }

    function addSubject(subject) {
        storage.subjectList.push(subject);
    }

    return {
        createSubject: createSubject,
        addSubject: addSubject,

    }

})();