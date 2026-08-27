function submitform(event){
    event.preventDefault();
    let inp_name = document.getElementById("name-field");
    let inp_email = document.getElementById("email-field");
    let inp_subject = document.getElementById("subject-field")
    let inp_feedback = document.getElementById("feedback-field");
// making form reactive

    let nameValue = inp_name.value;
    if(nameValue == ""){
        alert("Name is required");
        return;
    }

    let emailValue = inp_email.value;
    if(emailValue == ""){
        alert("Email is required");
        return;
    }

    let subjectValue = inp_subject.value;
    if(subjectValue == ""){
        alert("Subject is required");
        return;
    }
    let feedbackValue = inp_feedback.value;
    if(feedbackValue == ""){
        alert("Feedback is required");
        return;
    }

    // console.log(typeof(nameValue));
    // console.log(typeof(emailValue));
    // console.log(typeof(subjectValue));
    // console.log(typeof(feedbackValue));
    alert(`Form submitted successfully. Name is ${nameValue}, email is ${emailValue}, subject is ${subjectValue}, and feedback is ${feedbackValue}.`);
}