let fontReithSerifMedium;
let fontReithSansMedium;
let fontReithSansBold;
let fontReithSansRegular;
let tubeBg;
let overgroundBG;
let otherServicesBG;


let showStarting = true;
let showTube = false;
let showOverground = false;
let showOther = false;

// p5js built-in function, preload
function preload() {
    fontReithSerifMedium = loadFont("../fonts/reithSerif/BBCReithSerif_Md.ttf");
    fontReithSansMedium = loadFont("../fonts/reithSans/BBCReithSans_Md.ttf");
    fontReithSansBold = loadFont("../fonts/reithSans/BBCReithSans_Bd.ttf");
    fontReithSansRegular = loadFont("../fonts/reithSans/BBCReithSans_Rg.ttf");
    tubeBg = loadImage("TubeBG.png");
    overgroundBG = loadImage("OvergroundBG.png");
    otherServicesBG = loadImage("OtherBG.png");
    // bg = loadImage("Tube2.png");
}

// p5js built-in function, setup
function setup() {
    createCanvas(1920, 1080);
}

// shows warning about data not being accurate
function starting() {
    background(155);

    fill(0);

    textFont(fontReithSansRegular);
    textSize(45);
    text("To see the Tube board, click '1'.", 170, 200);
    text("To see the Overground board, click '2'.", 170, 250);
    text("To see the Other Services board (Elzabeth line, DLR, Trams, etc.), click '3'.", 170, 300);
    text("Animations coming soon!", 170, 500);
}

// shows tube board
function tubeBoard() {    
    image(tubeBg, 0, 0)
    noStroke();

    // line name, status font style, status, badge colour, line name colour

    let column1 = [
        ["Bakerloo", fontReithSansMedium,"Minor delays", [164, 90, 42], [255, 255, 255]],
        ["Central", fontReithSansRegular,"Good service", [218, 41, 28], [255, 255, 255]],
        ["Circle", fontReithSansRegular,"Good service", [255, 255, 0], [0, 0, 0]],
        ["District", fontReithSansRegular,"Good service", [0, 122, 51], [255, 255, 255]],
        ["H&C", fontReithSansRegular,"Good service", [232, 156, 174], [0, 0, 0]],
        ["Jubilee", fontReithSansRegular,"Good service", [124, 135, 142], [255, 255, 255]],
    ];

    let column2 = [
        ["Metropolitan", fontReithSansRegular,"Good service", [132, 11, 85], [255, 255, 255]],
        ["Northern", fontReithSansRegular,"Good service", [0, 0, 0], [255, 255, 255]],
        ["Piccadilly", fontReithSansRegular,"Good service", [16, 6, 159], [255, 255, 255]],
        ["Victoria", fontReithSansRegular,"Good service", [0, 163, 224], [255, 255, 255]],
        ["W&C", fontReithSansRegular,"Good service", [110, 206, 178], [0, 0, 0]],
    ];

    let yValueBG1 = 157; // for backgrounds, 99 spacing
    let yValueText1 = 211; // for text, 99 spacing

    for (const badge of column1) {
        // line badge bg
        fill(badge[3]);
        rect(83, yValueBG1, 342, 77);

        // line text
        fill(badge[4]);
        textFont(fontReithSerifMedium);
        textSize(45);
        text(badge[0], 102, yValueText1);

        // status bg
        fill([255, 255, 255, 150]);
        rect(425, yValueBG1, 477, 77);

        // status text
        fill([0, 0, 0, 300]);
        textFont(badge[1]);
        text(badge[2], 444, yValueText1);


        // finally, add to last y values
        yValueBG1 += 99;
        yValueText1 += 99;
    }

    let yValueBG2 = 157; // for backgrounds, 99 spacing
    let yValueText2 = 211; // for text, 99 spacing

    for (const badge of column2) {
        // line badge bg
        fill(badge[3]);
        rect(960, yValueBG2, 342, 77);

        // line text
        fill(badge[4]);
        textFont(fontReithSerifMedium);
        textSize(45);
        text(badge[0], 979, yValueText2);

        // status bg
        fill([255, 255, 255, 150]);
        rect(1302, yValueBG2, 477, 77);

        // status text
        fill([0, 0, 0, 300]);
        textFont(badge[1]);
        text(badge[2], 1321, yValueText2);


        // finally, add to last y values
        yValueBG2 += 99;
        yValueText2 += 99;
    }
}

// shows overground board
function overgroundBoard() {
    image(overgroundBG, 0, 0)
    noStroke();

    // line name, status font style, status, badge colour, line name colour

    let column1 = [
        ["Liberty", fontReithSansRegular,"Good service", [154, 154, 154], [0, 0, 0]],
        ["Lioness", fontReithSansRegular,"Good service", [255, 173, 42], [0, 0, 0]],
        ["Mildmay", fontReithSansBold,"Partially suspended", [0, 121, 191], [255, 255, 255]],
    ];

    let column2 = [
        ["Suffragette", fontReithSansRegular,"Good service", [41, 191, 40], [0, 0, 0]],
        ["Weaver", fontReithSansRegular,"Good service", [129, 0, 0], [255, 255, 255]],
        ["Windrush", fontReithSansRegular,"Good service", [239, 14, 24], [255, 255, 255]],
    ];

    let yValueBG1 = 157; // for backgrounds, 99 spacing
    let yValueText1 = 211; // for text, 99 spacing

    for (const badge of column1) {
        // line badge bg
        fill(badge[3]);
        rect(83, yValueBG1, 342, 77);

        // line text
        fill(badge[4]);
        textFont(fontReithSerifMedium);
        textSize(45);
        text(badge[0], 102, yValueText1);

        // status bg
        fill([255, 255, 255, 150]);
        rect(425, yValueBG1, 477, 77);

        // status text
        fill([0, 0, 0, 300]);
        textFont(badge[1]);
        text(badge[2], 444, yValueText1);


        // finally, add to last y values
        yValueBG1 += 99;
        yValueText1 += 99;
    }

    let yValueBG2 = 157; // for backgrounds, 99 spacing
    let yValueText2 = 211; // for text, 99 spacing

    for (const badge of column2) {
        // line badge bg
        fill(badge[3]);
        rect(960, yValueBG2, 342, 77);

        // line text
        fill(badge[4]);
        textFont(fontReithSerifMedium);
        textSize(45);
        text(badge[0], 979, yValueText2);

        // status bg
        fill([255, 255, 255, 150]);
        rect(1302, yValueBG2, 477, 77);

        // status text
        fill([0, 0, 0, 300]);
        textFont(badge[1]);
        text(badge[2], 1321, yValueText2);


        // finally, add to last y values
        yValueBG2 += 99;
        yValueText2 += 99;
    }
}

// shows other services board
function otherServicesBoard() {
    image(otherServicesBG, 0, 0)
    noStroke();

    // line name, status font style, status, badge colour, line name colour

    let column1 = [
        ["Tram", fontReithSansRegular,"Good service", [102, 204, 0], [0, 0, 0]],
        ["Elizabeth line", fontReithSansRegular,"Good service", [105, 80, 161], [255, 255, 255]],
    ];

    let column2 = [
        ["DLR", fontReithSansRegular,"Good service", [0, 175, 173], [0, 0, 0]],
    ];

    let yValueBG1 = 157; // for backgrounds, 99 spacing
    let yValueText1 = 211; // for text, 99 spacing

    for (const badge of column1) {
        // line badge bg
        fill(badge[3]);
        rect(83, yValueBG1, 342, 77);

        // line text
        fill(badge[4]);
        textFont(fontReithSerifMedium);
        textSize(45);
        text(badge[0], 102, yValueText1);

        // status bg
        fill([255, 255, 255, 150]);
        rect(425, yValueBG1, 477, 77);

        // status text
        fill([0, 0, 0, 300]);
        textFont(badge[1]);
        text(badge[2], 444, yValueText1);


        // finally, add to last y values
        yValueBG1 += 99;
        yValueText1 += 99;
    }

    let yValueBG2 = 157; // for backgrounds, 99 spacing
    let yValueText2 = 211; // for text, 99 spacing

    for (const badge of column2) {
        // line badge bg
        fill(badge[3]);
        rect(960, yValueBG2, 342, 77);

        // line text
        fill(badge[4]);
        textFont(fontReithSerifMedium);
        textSize(45);
        text(badge[0], 979, yValueText2);

        // status bg
        fill([255, 255, 255, 150]);
        rect(1302, yValueBG2, 477, 77);

        // status text
        fill([0, 0, 0, 300]);
        textFont(badge[1]);
        text(badge[2], 1321, yValueText2);


        // finally, add to last y values
        yValueBG2 += 99;
        yValueText2 += 99;
    }
}

// p5js built-in function, draw
function draw() {
    if (showStarting) {
        showTube = false;
        showOverground = false;
        showOther = false;
        starting();
    }
    if (showTube) {
        showStarting = false;
        showOverground = false;
        showOther = false;
        tubeBoard();
    }
    if (showOverground) {
        showStarting = false;
        showTube = false;
        showOther = false;
        overgroundBoard();
    }
    if (showOther) {
        showStarting = false;
        showTube = false;
        showOverground = false;
        otherServicesBoard()
    }
    
    fill(255, 255, 255, 150)
    text("Data is not accurate!", 50, 1040)
}

// p5js built-in function, keyTyped
function keyTyped() {
    if (key === '1' || key == 't') {
        showStarting = false;
        showOverground = false;
        showOther = false;

        showTube = true;
    } else if (key === '2' || key == 'o') {
        showStarting = false;
        showTube = false;
        showOther = false;

        showOverground = true;
    } else if (key === '3' || key == 's') {
        showStarting = false;
        showTube = false;
        showOverground = false;

        showOther = true;
    } else if (key === '.') {
        showTube = false;
        showOverground = false;
        showOther = false;

        showStarting = true;
    }
}