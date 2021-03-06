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
	camera.position.set(100,100,100);
	camera.lookAt(scene.position);

	// RENDERER
	if ( Detector.webgl )
		renderer = new THREE.WebGLRenderer( {antialias:true} );
	else
		renderer = new THREE.CanvasRenderer(); 

	//renderer.setSize($(container).width(), $(container).height());
	renderer.setSize(500, 500);
	container.appendChild( renderer.domElement );

	// LIGHT
	var light = new THREE.PointLight(0xffffff); //can change this to a more festive color later
	light.position.set(100,250,100);
	scene.add(light);

	// parameters: radius, detail
	var geometry = new THREE.TetrahedronGeometry(50);
	var material = new THREE.MeshLambertMaterial({ color: 0xFF0092 }); //way bright pink
	var mesh     = new THREE.Mesh( geometry, material );
	mesh.position.set(0,0,0);
	scene.add(mesh);

	renderScene();
}

// loop to continually re-render scene into window.
function renderScene() 
{
    requestAnimationFrame( renderScene );
	renderer.render( scene, camera );
}
