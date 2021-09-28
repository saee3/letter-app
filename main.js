function setup(){

    video=createCapture(VIDEO);
    video.size(550 , 500);


    canvas=createCanvas(550 , 550);
    canvas.postion=(560,150);
    poseNet = ml5.poseNet(video, modelLoaded);

}

function modelLoaded(){

    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.log > 0)
    {
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);
    }
}

function draw() {

    background('#E4EFE7');
    textSize(10);
    fill('#FFE787');
    text('Jeenie', 50, 400);
}