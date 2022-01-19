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
    let switcher;

    // TECLAS //
    let moveForward = false;
    let moveBack = false;
    let moveLeft = false;
    let moveRight = false;
    let openPc = false;
    let switchDoor = false;
    

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
                    tv.scale.set(0.75,0.75,0.75);
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
                pivot2.rotation.x =  -Math.PI / 2;
                pivot2.rotation.z = Math.PI / 2;
                wall4.add(pivot2);
                const loader4 = new GLTFLoader();
                loader4.load('./textures/porta/scene.gltf', function(gltf){
                    porta = gltf.scene;
                    porta.position.z= 3;
                    porta.position.y = -1.5;
                    porta.scale.set(3.1,3.1,3.1);
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
                cube1.position.set(-23,3.3,-6);
                scene.add(cube1);

                let geometry2 = new THREE.BoxGeometry(1.2,0.03,1.6);
                let material2 = new THREE.MeshBasicMaterial({ color: "black"});
                const cube3 = new THREE.Mesh(geometry2, material2);
                cube3.position.set(-23,3.35,-6);
                scene.add(cube3);

                pivot = new THREE.Object3D();
                pivot.position.x = -1
                pivot.rotation.x = Math.PI
                cube1.add(pivot);

                let geometry3 = new THREE.BoxGeometry(1.9,0.15,2);
                cube2 = new THREE.Mesh(geometry3, material1);
                cube2.position.x = +1;
                pivot.add(cube2);
            }

            function alavanca(){
                let geometry1 = new THREE.BoxGeometry(1.5,0.3,2);
                let material1 = new THREE.MeshBasicMaterial({ color: "#808080"});
                const cube1 = new THREE.Mesh(geometry1, material1);
                cube1.rotation.x =  -Math.PI/2;
                cube1.position.set(7,7,40.3);
                scene.add(cube1);

                let geometry2 = new THREE.BoxGeometry(0.5,0.3,0.4);
                let material2 = new THREE.MeshBasicMaterial({ color: "black", roughness: 2.5});
                switcher = new THREE.Mesh(geometry2, material2);
                switcher.position.set(7,7.55,40);
                scene.add(switcher);
            }

            function tapete(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/tapete2/scene.gltf', function(gltf){
                    const tapete = gltf.scene;
                    tapete.position.set(0,0.2,-5);
                    tapete.scale.set(10,10,11);
                    tapete.rotation.y =  - Math.PI / 2;
                    scene.add(tapete);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });

            }

            function sofa(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/sofa/scene.gltf', function(gltf){
                    const sofa = gltf.scene;
                    sofa.position.set(0,0.15,-10);
                    sofa.scale.set(0.056,0.056,0.056);
                    sofa.rotation.y = Math.PI / 4;
                    scene.add(sofa);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });

            }

            function planta(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/planta/scene.gltf', function(gltf){
                    const planta = gltf.scene;
                    planta.position.set(-22,5.1,-34);
                    planta.scale.set(2.2,2.2,2.2);
                    //planta.rotation.y = Math.PI / 4;
                    scene.add(planta);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });

            }

            function movel(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/movel1/scene.gltf', function(gltf){
                    const movel = gltf.scene;
                    movel.position.set(-20.3,5,35.8);
                    movel.scale.set(5.7,5.7,5.7);
                    movel.rotation.y = Math.PI - Math.PI/4;
                    scene.add(movel);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });

            }

            function piano(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/piano/scene.gltf', function(gltf){
                    const piano = gltf.scene;
                    piano.position.set(22.5,0,28);
                    piano.scale.set(7,7,7);
                    piano.rotation.y = -Math.PI/2;
                    scene.add(piano);
                }, function(xhr){
                    console.log((xhr.loaded/xhr.total * 100) + "%loaded")
                }, function(error){
                    console.log("error")
                });

            }

            function quadro(){
                const loader4 = new GLTFLoader();
                loader4.load('./textures/quadro/scene.gltf', function(gltf){
                    const quadro = gltf.scene;
                    quadro.position.set(-26.7,10,12);
                    quadro.scale.set(0.005,0.005,0.005);
                    quadro.rotation.y = Math.PI / 2;
                    scene.add(quadro);
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

            let light = new THREE.AmbientLight(0x404040, 6); // soft white light
            scene.add( light );

            const light2 = new THREE.PointLight( 0xEEEE9B, 10, 40);
            light2.position.set(0,-10,-6)
            light2.castShadow = true;
            scene.add(light2);

            chao();
            tapete();
            sofa();
            teto();
            paredes();
            lampada();
            mesa();
            tv();
            cadeira();
            pc();
            alavanca();
            door();
            movel();
            piano();
            quadro();
            janela();
            planta();


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
                    openPc = true; 
                }
                if(key == "e" || key == "E"){
                    openDoor = true;
                    //console.log(openPc);
                }
                if(key == "y" || key == "Y"){
                    switchDoor = true;
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
        // if(openDoor == true && pivot2.rotation.x >= -3.15){
        //     console.log(openDoor);
        //     pivot2.rotation.x -= 0.01;
        //     console.log(pivot2.rotation.x);           
        //     if(pivot2.rotation.x <= -3.2){
        //         console.log(pivot2.rotation.x); 
        //         openDoor = false;
        //     }    
        // }
        if(switchDoor == true){
            switcher.position.y -= 0.025;
            if(switcher.position.y <=6.35){
                switcher.position.y =6.35;
                if(pivot2.rotation.x >= -3.15){
                    pivot2.rotation.x -= 0.01;
                    if(pivot2.rotation.x <= -3.2){
                        switchDoor = false;
                    }
                }
            }
        }

        renderer.render(scene, camera);
        //requestAnimationFrame(render);
    }

   

   