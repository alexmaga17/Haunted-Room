import * as THREE from './libs/three.module.js';
import { GLTFLoader } from './libs/GLTFLoader.js';

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

    // TECLAS //
    let moveForward = false;
    let moveBack = false;
    let moveLeft = false;
    let moveRight = false;
    

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
                let materialWall4 = new THREE.MeshBasicMaterial({ map: walls });
                let wall4 = new THREE.Mesh(geometryWall4, materialWall4);
                wall4.rotation.z =  -Math.PI / 2;
                wall4.name = "wall4";
                scene.add(wall4);
                wall4.position.set(0,5,40);
            }

            

            // DOOR //
            
            let geometryDoor = new THREE.PlaneGeometry();
            let materialDoor = new THREE.MeshBasicMaterial({});
            let door = new THREE.Mesh(geometryDoor, materialDoor);

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
                    cadeira.position.set(-16,1.5,-6);
                    cadeira.scale.set(0.013,0.013,0.013);
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
    
    function newScene(){
        scene = new THREE.Scene();

            const aspect = window.innerWidth / window.innerHeight;
            camera = new THREE.PerspectiveCamera(90, aspect, 1.0, 1000);
            camera.position.x = camera.position.y = 2; // place the camera using world coordinates
            camera.position.set(0,5,10);
            camera.position.z = 10;

            // RENDERER //
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight); // set output canvas and viewport size
            renderer.setClearColor(0x8a8a8a); // configure clear color (background color)
            // add the output of the renderer to an HTML element (adds a Canvas element to the body)
            document.body.appendChild(renderer.domElement);

            let light = new THREE.AmbientLight(0x404040, 10); // soft white light
            scene.add( light );

            // let light2 = new THREE.DirectionalLight(0xFFFFFF, 1.0);
            // light2.position.set(0,-10,-6);
            // light2.target.position.set(0,-150,-6);
            // scene.add(light2);
            // let geometry1 = new THREE.BoxGeometry(30, 51.8, 30);
            // let material1 = new THREE.MeshBasicMaterial({ color: 0x008800, transparent: true, opacity: 0.0000001, name: "CameraBox" });
            // cameraBox = new THREE.Mesh(geometry1, material1);
            // cameraBox.rotation.y = Math.PI;
            // cameraBox.position.set(0, 0, 100);
            // scene.add(cameraBox);
        
            // cameraBox.geometry.computeBoundingBox();
            chao();
            teto();
            paredes();
            lampada();
            mesa();
            cadeira();
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
                if(key == "ArrowUp"){
                    camera.rotation.x += 0.06;
                    console.log(camera.rotation.x)
                }
                if(key == "ArrowDown"){
                    camera.rotation.x -= 0.06;
                    console.log(camera.rotation.x)
                }
                if(key == "ArrowRight"){
                    camera.rotation.y -= 0.06;
                    console.log(camera.rotation.y)
                }
                if(key == "ArrowLeft"){
                    camera.rotation.y += 0.06;
                    console.log(camera.rotation.y)
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

        renderer.render(scene, camera);
        //requestAnimationFrame(render);
    }

   

   