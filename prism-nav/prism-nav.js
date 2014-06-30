var scene, camera, renderer;

initialize();
		
function initialize() 
{
	scene = new THREE.Scene();
	var container = $('#prism-nav')[0];

	// CAMERA
	var FOV = 45; 
	var ASPECT_RATIO = $(container).width() / $(container).height();
	var NEAR_PLANE = 1;
	var FAR_PLANE  = 100;
	camera = new THREE.PerspectiveCamera( FOV, ASPECT_RATIO, NEAR_PLANE, FAR_PLANE );
	scene.add(camera);
	camera.position.set(0,150,0);
	camera.lookAt(scene.position);

	// RENDERER
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 

	renderer.setSize($(container).width(), $(container).height());
	container.appendChild( renderer.domElement );

	// LIGHT
	var light = new THREE.PointLight(0xffffff); //can change this to a more festive color later
	light.position.set(100,250,100);
	scene.add(light);
}