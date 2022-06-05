Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capturedImage" src="'+data_uri+'">';
    });
}
console.log("ml5 Version : ", ml5.version);

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/kU9y3QP-n/', modelLoaded);
function modelLoaded(){
    console.log("model's loaded");
}
function speak(){
    var synth=window.speechSynthesis;
    speakData1=spe;
    var utterThis=new SpeechSynthesisUtterance(speakData1);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById("capturedImage");
    classifier.classify(img, gotResult);
}
function gotResult(error,results){
    if(error){
        console.log(error);
    }  
    else{
        console.log(results);
        document.getElementById("resultEmotionName").innerHTML=results[0].label;
        pred1=results[0].label;
            spe="";
                
        if(pred1=="Amazing"){
            document.getElementById("updateEmoji").innerHTML="&#128522";
            spe="This looks Amazing!";
        }
        if(pred1=="Best"){
            document.getElementById("updateEmoji").innerHTML="&#128532";
            spe="All the Best!";
        }
        if(pred1=="Victory"){
            document.getElementById("updateEmoji").innerHTML="&#128548";
            spe="What a wonderful Victory!";
        }
        speak();
    } 
}