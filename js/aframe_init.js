var ballSize = 1;
var duration = 1000;

//player
var sphere = new ui.Actor({
    as: aframeRole,
    element: document.querySelector('a-sphere'),
    values: {
        radius: ballSize,
        color: "#EF2D5E",
        segmentsHeight: 18
    }
});

var cube = new ui.Actor({
    as: aframeRole,
    element: document.querySelector('a-cube'),
    values: {
        rotateX: 0,
        rotateY: 45,
        rotateZ: 0
    }
});

var cylinder = new ui.Actor({
    as: aframeRole,
    element: document.querySelector('a-cylinder'),
    values: {
        height: 1.5,
        radius: .5
    }
});
/*
var growTall = new ui.Tween({
    duration: duration,
    ease: 'anticipate',
    values: {
        height: 4,
        radius: .8
    },
    flip: true
});

var rotate = new ui.Tween({
    duration: duration,
    flip: true,
    values: {
        rotateX: 90,
        rotateY: 90
    }
});

var changeSphere = new ui.Tween({
    duration: duration,
    flip: true,
    values: {
        segmentsHeight: 3,
        color: "#4CC3D9"
    }
});

sphere.start(changeSphere);
cube.start(rotate);
cylinder.start(growTall);
*/

function getRandomPlacement() {
	var pos = Math.random().toString();
	for (var i = 0; i < 2; i++) {
		pos += (' ' + ((Math.random() % 10) * 2).toString());
	}
	return pos;
}

$(document).ready(function() {
	$('#random').click(function() {
		$('a-sphere').attr('position', getRandomPlacement());
		console.log($('a-sphere').attr('position'));
		$('a-cube').attr('position', getRandomPlacement());
		console.log($('a-cube').attr('position'));
		$('a-cylinder').attr('position', getRandomPlacement());
		console.log($('a-cylinder').attr('position'));
		
	});

});