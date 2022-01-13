import * as THREE from './libs/three.module.js';

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
    walls.repeat.set(1.5,1.5);
    walls.wrapS = walls.wrapT = THREE.MirroredRepeatWrapping;

    // TECLAS //
    let moveForward = false;
    let moveBack = false;
    let moveLeft = false;
    let moveRight = false;
    

    window.onload = function init() {
        alert("BEM VINDO!\nPARA MOVER O TEU PERSONAGEM UTILIZA AS TECLAS WASD!");
    } 
    
    function newScene(){
        scene = new THREE.Scene();

            const aspect = window.innerWidth / window.innerHeight;
            camera = new THREE.PerspectiveCamera(75, aspect, 5, 50);
            camera.position.x = camera.position.y = 2; // place the camera using world coordinates
            camera.position.set(0,5,10);
            camera.position.z = 10;

            // RENDERER //
            renderer = new THREE.WebGLRenderer();
            renderer.setSize(window.innerWidth, window.innerHeight); // set output canvas and viewport size
            renderer.setClearColor(0x8a8a8a); // configure clear color (background color)
            // add the output of the renderer to an HTML element (adds a Canvas element to the body)
            document.body.appendChild(renderer.domElement);

            // CHÃO //
            let geometryFloor = new THREE.PlaneGeometry(50, 80);
            let materialFloor = new THREE.MeshBasicMaterial({ map: ground });
            let floor = new THREE.Mesh(geometryFloor, materialFloor);
            floor.rotation.x = - Math.PI / 2;
            floor.name = "floor";
            scene.add(floor);
            

            // TETO //
            let geometryRoof = new THREE.PlaneGeometry(50, 50);
            let materialRoof = new THREE.MeshBasicMaterial({ map: ceiling });
            let roof = new THREE.Mesh(geometryRoof, materialRoof);
            roof.rotation.x = Math.PI / 2;
            roof.name = "roof";
            scene.add(roof);
            roof.position.set(0,13,10);

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
            wall3.position.set(25,7,-45);


            // ANIMAR //
            renderer.setAnimationLoop(render);

            document.onkeydown = handleKeyDown;

            // KEYS //
            function handleKeyDown(e){
                let key = e.key;

                if(key == "w"){
                    moveForward = true;
                }
                if(key == "s"){
                    moveBack = true;
                }
                if(key == "a"){
                    moveLeft = true;
                }
                if(key == "d"){
                    moveRight = true;
                }
                if(key == "ArrowUp"){
                    camera.position.y += 2;
                    console.log(camera.position.y)
                }
                if(key == "ArrowDown"){
                    camera.position.y -= 2;
                    console.log(camera.position.y)
                }
            }


    }

    function render() {

        if(moveForward == true){
            camera.position.z -= 4;
            console.log(camera.position.z)
            moveForward = false;
        }
        if(moveBack == true){
            camera.position.z += 4;
            console.log(camera.position.z)
            moveBack = false;
        }
        if(moveLeft == true){
            camera.position.x -= 4;
            console.log(camera.position.x)
            moveLeft = false;
        }
        if(moveRight == true){
            camera.position.x += 4;
            console.log(camera.position.x)
            moveRight = false;
        }
        renderer.render(scene, camera);
        //renderer.requestAnimationFrame(render);
    }

    newScene();

   