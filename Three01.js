import * as THREE from './libs/three.module.js';
import { GLTFLoader } from './libs/GLTFLoader.js';
import { OrbitControls } from './libs/OrbitControls.js'

    let camera, scene, renderer;
    // CHÃO //
    let ground = new THREE.TextureLoader().load("textures/chao3.jpg");
    ground.repeat.set(4,4);
    ground.wrapS = ground.wrapT = THREE.MirroredRepeatWrapping;

    // TETO //
    let ceiling = new THREE.TextureLoader().load("textures/teto1.jpg");
    ceiling.repeat.set(3,3);
    ceiling.wrapS = ceiling.wrapT = THREE.MirroredRepeatWrapping;

    // PAREDES //
    let walls = new THREE.TextureLoader().load("textures/paredes4.jpg");
    walls.repeat.set(1.5,1,5);
    walls.wrapS = walls.wrapT = THREE.MirroredRepeatWrapping;

    // PORTA E PC //
    let cube2;
    let pivot;
    let wall4;
    let porta;
    let pivot2;

    // TECLAS //
    let moveForward = false;
    let moveBack = false;
    let moveLeft = false;
    let moveRight = false;
    let openPc = false;
    let openDoor = false;
    

    window.onload = function init() {
        alert("BEM VINDO!\nPARA MOVER O TEU PERSONAGEM UTILIZA AS TECLAS WASD!");
        newScene();
        
    }

            // CHÃO //
            function chao(){
                let geometryFloor = new THREE.PlaneGeometry(50, 80);
                let materialFloor = new THREE.MeshBasicMaterial({ map: ground });
                let floor = new THREE.Mesh(geometryFloor, materialFloor);
                floor.rotation.x = - Math.PI / 2;
                floor.name = "floor";
                scene.add(floor);
                renderer.render(scene, camera);
            }
            

            // TETO //
            function teto(){
                let geometryRoof = new THREE.PlaneGeometry(50, 80);
                let materialRoof = new THREE.MeshBasicMaterial({ map: ceiling });
                let roof = new THREE.Mesh(geometryRoof, materialRoof);
                roof.rotation.x = Math.PI / 2;
                roof.name = "roof";
                scene.add(roof);
                roof.position.set(0,14,3);
            }

            // PAREDES //
            function paredes(){
                // PAREDE 1 //
                let geometryWall1 = new THREE.PlaneGeometry(80, 14);
                let materialWall1 = new THREE.MeshBasicMaterial({ map: walls });
                let wall1 = new THREE.Mesh(geometryWall1, materialWall1);
                wall1.rotation.y = Math.PI / 2;
                wall1.name = "wall1";
                scene.add(wall1);
                wall1.position.set(-25,7,0.5);

                // PAREDE 2 //
                let geometryWall2 = new THREE.PlaneGeometry(80, 14);
                let materialWall2 = new THREE.MeshBasicMaterial({ map: walls });
                let wall2 = new THREE.Mesh(geometryWall2, materialWall2);
                wall2.rotation.y = - Math.PI / 2;
                wall2.name = "wall2";
                scene.add(wall2);
                wall2.position.set(25,7,0.5);

                // PAREDE 3 //
                let geometryWall3 = new THREE.PlaneGeometry(14, 50);
                let materialWall3 = new THREE.MeshBasicMaterial({ map: walls });
                let wall3 = new THREE.Mesh(geometryWall3, materialWall3);
                wall3.rotation.z =  -Math.PI / 2;
                wall3.name = "wall3";
                scene.add(wall3);
                wall3.position.set(0,7,-37);

                // PAREDE 4 //
                let geometryWall4 = new THREE.PlaneGeometry(14, 50);
                let materialWall4 = new THREE.MeshBasicMaterial({ map: walls , side: THREE.DoubleSide});
                wall4 = new THREE.Mesh(geometryWall4, materialWall4);
                wall4.rotation.z =  -Math.PI / 2;
                wall4.name = "wall4";
                scene.add(wall4);
                wall4.position.set(0,7,40.5);

                //ATRAS DA PORTA//
                let geometryWall5 = new THREE.PlaneGeometry(5, 8);
                let materialWall5 = new THREE.MeshBasicMaterial({ color: "white" , side: THREE.DoubleSide});
                let wall5 = new THREE.Mesh(geometryWall5, materialWall5);
                wall5.rotation.z =  -Math.PI / 2;
                wall5.name = "wall5";
                scene.add(wall5);
                wall5.position.set(0,7,40);
            }

            // LAMPADA //
            function lampada(){
                const loader = new GLTFLoader();
                loader.load('./textures/lamp_ceiling_-_fnaf/scene.gltf', function(gltf){
                    const lamp = gltf.scene;
                    lamp.position.set(0,11.5,-6);
                    lamp.scale.set(0.008,0.008,0.008)
                    scene.add(lamp);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });
            }

            // MESA //
            function mesa(){
                const loader2 = new GLTFLoader();
                loader2.load('./textures/mesa/scene.gltf', function(gltf){
                    const mesa = gltf.scene;
                    mesa.position.set(-23,1.5,-6);
                    mesa.scale.set(3.5,3.5,3.5);
                    // mesa.rotation.y =  - Math.PI / 2;
                    scene.add(mesa);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });
            }

            // CADEIRA //
            function cadeira(){
                const loader3 = new GLTFLoader();
                loader3.load('./textures/cadeira/scene.gltf', function(gltf){
                    const cadeira = gltf.scene;
                    cadeira.position.set(-20,0,-6);
                    cadeira.scale.set(0.016,0.016,0.016);
                    cadeira.rotation.y =  - Math.PI / 2;
                    scene.add(cadeira);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });
            }

            // JANELA //
            function janela(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/janela/scene.gltf', function(gltf){
                    const janela = gltf.scene;
                    janela.position.set(0,7,-36.5);
                    janela.scale.set(5,5,5);
                    scene.add(janela);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });
            }

            function tv(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/tv/scene.gltf', function(gltf){
                    const tv = gltf.scene;
                    tv.position.set(24,0,-6);
                    tv.scale.set(0.7,0.7,0.7);
                    tv.rotation.y =  - Math.PI / 2;
                    scene.add(tv);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });
            }
            
            function door(){
                pivot2 = new THREE.Object3D();
                pivot2.position.z = -0.3;
                pivot2.position.x = 1.45;
                pivot2.rotation.x =  -Math.PI / 2;
                pivot2.rotation.z = Math.PI / 2;
                wall4.add(pivot2);
                const loader4 = new GLTFLoader();
                loader4.load('./textures/porta/scene.gltf', function(gltf){
                    porta = gltf.scene;
                    //porta.position.set(0,4.7,39.7);
                    porta.scale.set(3.1,3.1,3.1);
                    // porta.rotation.y = Math.PI/2;
                    // porta.rotation.z = Math.PI / 2;
                    pivot2.add(porta);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });
            }
            
            function pc(){
                let geometry1 = new THREE.BoxGeometry(2,0.1,2);
                let material1 = new THREE.MeshBasicMaterial({ color: "grey"});
                const cube1 = new THREE.Mesh(geometry1, material1);
                cube1.position.set(-23,3.5,-6);
                scene.add(cube1);

                pivot = new THREE.Object3D();
                pivot.position.x = -1
                pivot.rotation.x = Math.PI
                //pivot.rotation.z = Math.PI / 2;
                cube1.add(pivot);

                
                cube2 = new THREE.Mesh(geometry1, material1);
                cube2.position.x = +1
                pivot.add(cube2);
            }
    
    function newScene(){
        scene = new THREE.Scene();

            const aspect = window.innerWidth / window.innerHeight;
            camera = new THREE.PerspectiveCamera(90, aspect, 1.0, 1000);
            camera.position.x = camera.position.y = 2; // place the camera using world coordinates
            camera.position.set(0,6,10);
            camera.position.z = 10;

            // RENDERER //
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight); // set output canvas and viewport size
            renderer.setClearColor(0x8a8a8a); // configure clear color (background color)
            // add the output of the renderer to an HTML element (adds a Canvas element to the body)
            window.addEventListener('resize', function(){
                let width = window.innerWidth;
                let height = window.innerHeight;
                renderer.setSize(width,height);
                camera.aspect = width / height;
                camera.updateProjectionMatrix();
            });
            document.body.appendChild(renderer.domElement);
            const controls = new OrbitControls(camera, renderer.domElement);

            controls.keys = {
                LEFT: 'ArrowLeft', //left arrow
                UP: 'ArrowUp', // up arrow
                RIGHT: 'ArrowRight', // right arrow
                BOTTOM: 'ArrowDown' // down arrow
            }

            let light = new THREE.AmbientLight(0x404040, 9); // soft white light
            scene.add( light );

            const light2 = new THREE.PointLight( 0xEEEE9B, 10, 40);
            light2.position.set(0,-10,-6)
            light2.castShadow = true;
            scene.add(light2);

            chao();
            teto();
            paredes();
            lampada();
            mesa();
            tv();
            cadeira();
            pc();
            door();
            janela();


            // ANIMAR //
            renderer.setAnimationLoop(render);
            document.onkeydown = handleKeyDown;

            // KEYS //
            function handleKeyDown(e){
                let key = e.key;

                if(key == "w" || key == "W"){
                    moveForward = true;
                }
                if(key == "s" || key == "S"){
                    moveBack = true;
                }
                if(key == "a" || key == "A"){
                    moveLeft = true;
                }
                if(key == "d" || key == "D"){
                    moveRight = true;
                }
                if(key == "t" || key == "T"){
                    console.log(openPc);
                    openPc = true;
                    console.log(openPc);
                }

                if(key == "e" || key == "E"){
                    openDoor = true;
                    //console.log(openPc);
                }
            }

    }

    function render() {

        if(moveForward == true){
            if(camera.position.z <= -32){
                moveForward = false;
            }else{
                camera.position.z -= 2;
                console.log(camera.position.z)
                moveForward = false;
            }
        }
        if(moveBack == true){
            if(camera.position.z >= 40){
                moveBack = false;
            }else{
                camera.position.z += 2;
                console.log(camera.position.z)
                moveBack = false;
            }
        }
        if(moveLeft == true){
            if(camera.position.x <= -22){
                moveLeft = false;
            }else{
                camera.position.x -= 2;
                console.log(camera.position.x)
                moveLeft = false;
            }
        }
        if(moveRight == true){
            if(camera.position.x >= 24){
                moveRight = false;
            }else{
                camera.position.x += 2;
                console.log(camera.position.x)
                moveRight = false;
            }
        }
        if(openPc == true){
            console.log(openPc);
            pivot.rotation.z -= 0.01;
            console.log(pivot.rotation.z);            
            if(pivot.rotation.z <= -1.5){
                console.log(pivot.rotation.z); 
                openPc = false;
            }    
        }
        if(openDoor == true && THREE.Math.radToDeg(porta.rotation.y) <= -90){
            porta.rotation.y -= THREE.Math.radToDeg(-2);
            console.log(porta.rotation.y);            
            if(THREE.Math.radToDeg(porta.rotation.y) >= 114.5){
                console.log(porta.rotation.y); 
                openDoor = false;
            }    
        }

        renderer.render(scene, camera);
        //requestAnimationFrame(render);
    }

   

   