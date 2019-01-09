function gradeCalculator(){
    var homeworkPoints = document.getElementById("homeworkPoints").value;
    var homeworkWeight = parseInt(document.getElementById("homeworkWeight").value);
    var classworkPoints = document.getElementById("classworkPoints").value;
    var classworkWeight = parseInt(document.getElementById("classworkWeight").value);
    var assessmentPoints = document.getElementById("assessmentPoints").value;
    var assessmentWeight = parseInt(document.getElementById("assessmentWeight").value);
    var participationPoints = document.getElementById("participationPoints").value;
    var participationWeight = parseInt(document.getElementById("participationWeight").value);


    var percent = homeworkWeight + classworkWeight + assessmentWeight + participationWeight + parseInt(document.getElementById("finalWeight").value);



    var hwArray = convertArrayStringToNumber(homeworkPoints);
    var cwArray = convertArrayStringToNumber(classworkPoints);
    var atArray = convertArrayStringToNumber(assessmentPoints);
    var ptArray = convertArrayStringToNumber(participationPoints);

    var hwAverage = averageArray(hwArray);
    var cwAverage = averageArray(cwArray);
    var atAverage = averageArray(atArray);
    var ptAverage = averageArray(ptArray);


    var catHomework = gradeAndWeight(hwAverage, homeworkWeight);
    var catClasswork = gradeAndWeight(cwAverage, classworkWeight);
    var catAssessment = gradeAndWeight(atAverage, assessmentWeight);
    var catParticipation = gradeAndWeight(ptAverage, participationWeight);

    var theActualGrade = calculateCurrentGrade(catHomework, catClasswork, catAssessment, catParticipation, percent);


    var percentLarger = greaterPercent(percent);
    if (percentLarger == false) {
    
        return false;
    }
    averageColor(hwAverage, "extreme");
    averageColor(cwAverage, "high");
    averageColor(atAverage, "medium");
    averageColor(ptAverage, "low");

    document.getElementById("percent").innerHTML = theActualGrade + "%";


    return theActualGrade;
}
function convertArrayStringToNumber(string){
    var arr = string.split(",");
    for(var i=0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]);
    }

    return arr;
}
function averageArray(array){
    var avg = 0;
    for(var i = 0; i < array.length; i++){
        avg += array[i];
    }

    avg = avg / (array.length);
    return avg;
}
function gradeAndWeight(average, weight){
    var catScore = average * (weight * .01);
    return catScore;
}


function calculateCurrentGrade(homework, classwork, assessment, participation, percent){
    var ctGrade =  homework + classwork + assessment + participation;
    var newPercent = percent - parseInt(document.getElementById("finalWeight").value);
    var actualPercent = newPercent * 0.01;
    ctGrade = ctGrade / actualPercent;
    return ctGrade;
}

function calculateFinal(){
    var currentGrade = gradeCalculator();
    var gradeDesired = parseInt(document.getElementById("gradeDesired").value);
    var finalWeight = parseInt(document.getElementById("finalWeight").value);
    var weightCurrent = 1 - (finalWeight/100);
    var weightedCurrent = currentGrade * weightCurrent;
    var finalGradeRequired = (gradeDesired - weightedCurrent) / (finalWeight/100);
    document.getElementById("gradeRequired").innerHTML = finalGradeRequired + "%" + " needed to acquire a " + gradeDesired + "%";
}

function greaterPercent(gradeAndWeight){
    if(gradeAndWeight > 100){
        alert("The weights you have inputted are over 100%");
        return false;
    }
    return true;
}

function averageColor(average, element) {
    if (average >= 90) {
        document.getElementById(element).style.background = 'green' ;
    }
    if (average >= 80 && average < 90) {
        document.getElementById(element).style.background = 'blue';
    }
    if (average >= 70 && average < 80) {
        document.getElementById(element).style.background = 'yellow';
    }
    if (average >= 65 && average < 70) {
        document.getElementById(element).style.background = 'orange';
    }
    if (average <= 64) {
        document.getElementById(element).style.background = 'red';
    }
}
