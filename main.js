function preload() {

}

function setup() {
    canvas= createCanvas(500, 500)
    video= createCapture(VIDEO)
    video.size(500, 500)
    canvas.position(1030, 100)
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}

function gotPoses(results) {
    if (results.length>0) {
        console.log(results)
    }
}

function modelLoaded() {
    console.log("model loaded")
}

function draw() {

}
