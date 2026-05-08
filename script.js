  import * as THREE from 'three';
        import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
         import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
        // Scene setup
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0x87CEEB);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        document.body.appendChild(renderer.domElement);

        // Lighting
        const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(10, 20, 10);
        directionalLight.castShadow = true;
        directionalLight.shadow.mapSize.width = 2048;
        directionalLight.shadow.mapSize.height = 2048;
        scene.add(directionalLight);

const textureLoader = new THREE.TextureLoader();
const texture = textureLoader.load('texture/brown-wood-textured-background-with-design-space - Copie.jpg');

texture.wrapS = THREE.RepeatWrapping;
texture.wrapT = THREE.RepeatWrapping;
texture.repeat.set(1, 1);

const wardrobe = new THREE.Group();
let fullViewMode = false;
const headGroup = new THREE.Group();
const chestGroup = new THREE.Group();
const footGroup = new THREE.Group();

//===================================FLOOR

const texturefloorLoader = new THREE.TextureLoader();
const floorTexture = textureLoader.load('texture/brown-wood-textured-background-with-design-space.jpg');
// repeat texture so it doesn’t stretch
floorTexture.wrapS = THREE.RepeatWrapping;
floorTexture.wrapT = THREE.RepeatWrapping;
floorTexture.repeat.set(1, 5);
const floorMaterial = new THREE.MeshStandardMaterial({
    map: floorTexture
});
const floorGeometry = new THREE.BoxGeometry(19.9, 40.2, 0.2);
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.position.set(0, -18.3, 15.8);
floor.rotation.x = Math.PI / 2;
floor.rotation.z = Math.PI / 2;
headGroup.add(floor);

//===================================WALLS
// TOP

const textureLoaderwall = new THREE.TextureLoader();
const wallTexture = textureLoader.load('texture/O9H8JP0.jpg');
wallTexture.colorSpace = THREE.SRGBColorSpace;
const wallMaterial = new THREE.MeshStandardMaterial({
    map: wallTexture
});

// LEFT
const wall_leftGeometry = new THREE.BoxGeometry(10, 20, 0.2);
const wall_left = new THREE.Mesh(wall_leftGeometry, wallMaterial);
wall_left.position.set(19.3, -12, 5.8);
chestGroup.add(wall_left);

// LEFT II
const left_II = wall_left.clone();
left_II.position.set(19.3, 8, 5.8);
chestGroup.add(left_II);
// RIGHT

const right = wall_left.clone();
right.position.set(-19.3, 8, 5.8);
chestGroup.add(right);

// RIGHT III
const rightIII = wall_left.clone();
rightIII.position.set(-19.3, -12, 5.8);
chestGroup.add(rightIII);

// TOP I
const topI = wall_left.clone();
topI.position.set(-5, 28, 5.8);
chestGroup.add(topI);
// TOP II
const topII = wall_left.clone();
topII.position.set(5, 28, 5.8);
chestGroup.add(topII);

const topIII = wall_left.clone();
topIII.position.set(-15, 28, 5.8);
 chestGroup.add(topIII);

const topIIII = wall_left.clone();
topIIII.position.set(15, 28, 5.8);
chestGroup.add(topIIII);

const left_part = wall_left.clone();
left_part.position.set(-20, -8.1, 10.8);
left_part.rotation.y = Math.PI / 2;
chestGroup.add(left_part);

const left_partI = wall_left.clone();
left_partI.position.set(-20, 8.1, 10.8);
left_partI.rotation.y = Math.PI / 2;
chestGroup.add(left_partI);

const left_partII = wall_left.clone();
left_partII.position.set(-20, 28, 10.8);
left_partII.rotation.y = Math.PI / 2;
chestGroup.add(left_partII);

const left_partIII = wall_left.clone();
left_partIII.position.set(-20, -8.1, 20.8);
left_partIII.rotation.y = Math.PI / 2;
chestGroup.add(left_partIII);

const left_partIIII = wall_left.clone();
left_partIIII.position.set(-20, 8.1, 20.8);
left_partIIII.rotation.y = Math.PI / 2;
chestGroup.add(left_partIIII);

const left_partV = wall_left.clone();
left_partV.position.set(-20, 28, 20.8);
left_partV.rotation.y = Math.PI / 2;
chestGroup.add(left_partV);

const right_part = wall_left.clone();
right_part.position.set(20, -8.1, 10.8);
right_part.rotation.y = Math.PI / 2;
chestGroup.add(right_part);

const right_partI = wall_left.clone();
right_partI.position.set(20, 8.1, 10.8);
right_partI.rotation.y = Math.PI / 2;
chestGroup.add(right_partI);

const right_partII = wall_left.clone();
right_partII.position.set(20, 28, 10.8);
right_partII.rotation.y = Math.PI / 2;
chestGroup.add(right_partII);

const right_partIII = wall_left.clone();
right_partIII.position.set(20, -8.1, 20.8);
right_partIII.rotation.y = Math.PI / 2;
chestGroup.add(right_partIII);

const right_partIIII = wall_left.clone();
right_partIIII.position.set(20, 8.1, 20.8);
right_partIIII.rotation.y = Math.PI / 2;
chestGroup.add(right_partIIII);

const right_partV = wall_left.clone();
right_partV.position.set(20, 28, 20.8);
right_partV.rotation.y = Math.PI / 2;
chestGroup.add(right_partV);

//////////////////////////////////////////////////// HEAD

//===================================TEXTURE

const head_rightMaterial = new THREE.MeshStandardMaterial({map: texture});


//===================================ROOF
const head_roofGeometry = new THREE.BoxGeometry(6, 20, 0.2);
const head_roof = new THREE.Mesh(head_roofGeometry,head_rightMaterial);
head_roof.position.set(0, 17.9, 2.9);
head_roof.rotation.z = Math.PI /2;
head_roof.rotation.x = Math.PI /2;
headGroup.add(head_roof);



////////////////////////////////////////////////////// CHEST

//================================================BACK

const roofMaterial = new THREE.MeshStandardMaterial({
    map: texture
});
const chest_backGeometry = new THREE.BoxGeometry(10, 36, 0.3);
const chest_back = new THREE.Mesh(chest_backGeometry, roofMaterial);
chest_back.position.set(5, 0, 0);
chestGroup.add(chest_back);

//=================================================BACK2

const backMaterial = new THREE.MeshStandardMaterial({
    map: texture
});
const chest_back2Geometry = new THREE.BoxGeometry(10, 36, 0.3);
const chest_back2 = new THREE.Mesh(chest_back2Geometry, roofMaterial);
chest_back2.position.set(-5, 0, 0);
chestGroup.add(chest_back2);

//====================================================LEFT

const chest_leftGeometry = new THREE.BoxGeometry(6, 36, 0.2);
const chest_left = new THREE.Mesh(chest_leftGeometry, roofMaterial);
chest_left.position.set(10, 0, 2.9);
chest_left.rotation.y = Math.PI / 2;
chestGroup.add(chest_left);

//======================================================MID

const chest_midGeometry = new THREE.BoxGeometry(6, 20, 0.2);
const chest_mid = new THREE.Mesh(chest_midGeometry, roofMaterial);
chest_mid.position.set(0, 0, 2.9);
chest_mid.rotation.y = Math.PI / 2;
chestGroup.add(chest_mid);

//======================================================RIGHT

const chest_rightGeometry = new THREE.BoxGeometry(6, 36, 0.2);
const chest_right = new THREE.Mesh(chest_rightGeometry, roofMaterial);
chest_right.position.set(-10, 0, 2.9);
chest_right.rotation.y = Math.PI / 2;
chestGroup.add(chest_right);

//=========================================================ROOF

const chest_roofGeometry = new THREE.BoxGeometry(6, 20, 0.2);
const chest_roof = new THREE.Mesh(chest_roofGeometry, roofMaterial);
chest_roof.position.set(0, 9.9, 2.9);
chest_roof.rotation.z = Math.PI /2;
chest_roof.rotation.x = Math.PI /2;
chestGroup.add(chest_roof);

//==========================================================FLOOR

const chest_floorGeometry = new THREE.BoxGeometry(6, 20, 0.2);
const chest_floor = new THREE.Mesh(chest_floorGeometry, roofMaterial);
chest_floor.position.set(0, -9.9, 2.9);
chest_floor.rotation.z = Math.PI /2;
chest_floor.rotation.x = Math.PI /2;
chestGroup.add(chest_floor);

////////////////////////////////////////////////////////// CHEST SHELF

//=================================================== SHELF RIGHT SIDE

// RIGHT shelf I
const chest_right_shelf_IGeometry = new THREE.BoxGeometry(6, 10, 0.2);
const chest_right_shelf_I = new THREE.Mesh(chest_right_shelf_IGeometry, roofMaterial);
chest_right_shelf_I.position.set(-5, 5, 2.9);
chest_right_shelf_I.rotation.z = Math.PI /2;
chest_right_shelf_I.rotation.x = Math.PI /2;
chestGroup.add(chest_right_shelf_I);

// RIGHT shelf MID
const chest_right_shelf_midGeometry = new THREE.BoxGeometry(6, 10, 0.2);
const chest_right_shelf_mid = new THREE.Mesh(chest_right_shelf_midGeometry, roofMaterial);
chest_right_shelf_mid.position.set(-5, 0, 2.9);
//chest_right_shelf_mid.rotation.z = Math.PI /2;
chest_right_shelf_mid.rotation.y = Math.PI /2;
chestGroup.add(chest_right_shelf_mid);

// RIGHT shelf II
const chest_right_shelf_IIGeometry = new THREE.BoxGeometry(6, 10, 0.2);
const chest_right_shelf_II = new THREE.Mesh(chest_right_shelf_IIGeometry, roofMaterial);
chest_right_shelf_II.position.set(-5, 0, 2.9);
chest_right_shelf_II.rotation.z = Math.PI /2;
chest_right_shelf_II.rotation.x = Math.PI /2;
chestGroup.add(chest_right_shelf_II);

// RIGHT shelf II
const chest_right_shelf_IIIGeometry = new THREE.BoxGeometry(6, 10, 0.2);
const chest_right_shelf_III = new THREE.Mesh(chest_right_shelf_IIIGeometry, roofMaterial);
chest_right_shelf_III.position.set(-5, -5, 2.9);
chest_right_shelf_III.rotation.z = Math.PI /2;
chest_right_shelf_III.rotation.x = Math.PI /2;
chestGroup.add(chest_right_shelf_III);

//===================================================== SHELF LEFT SIDE

// LEFT BAR
const texturebarLoader = new THREE.TextureLoader();
const barTexture = textureLoader.load('texture/bar.jpg');
barTexture.wrapS = THREE.RepeatWrapping;
barTexture.wrapT = THREE.RepeatWrapping;
barTexture.repeat.set(2, 1); 
const barGeometry = new THREE.CylinderGeometry(0.2, 0.2, 10, 32);
const barMaterial = new THREE.MeshStandardMaterial({
    map: barTexture
});
const bar = new THREE.Mesh(barGeometry, barMaterial);
bar.rotation.z = Math.PI / 2;
bar.position.set(5, 7.5, 3);
chestGroup.add(bar);


// LEFT shelf I
const chest_left_shelf_IGeometry = new THREE.BoxGeometry(6, 10, 0.2);
const chest_left_shelf_I = new THREE.Mesh(chest_right_shelf_IGeometry, roofMaterial);
chest_left_shelf_I.position.set(5, -5, 2.9);
chest_left_shelf_I.rotation.z = Math.PI /2;
chest_left_shelf_I.rotation.x = Math.PI /2;
chestGroup.add(chest_left_shelf_I);

////////////////////////////////////////////////////////////// FOOT
//======================================================FLOOR

const foot_floorGeometry = new THREE.BoxGeometry(6, 20, 0.2);
const foot_floor = new THREE.Mesh(foot_floorGeometry,head_rightMaterial);
foot_floor.position.set(0, -17.9, 2.9);
foot_floor.rotation.z = Math.PI /2;
foot_floor.rotation.x = Math.PI /2;
footGroup.add(foot_floor);

wardrobe.add(headGroup);
wardrobe.add(chestGroup);
wardrobe.add(footGroup);
scene.add(wardrobe);

wardrobe.position.set(0, 1, -10);
wardrobe.scale.set(2.5, 1.2, 2);

//////////////////////////////////////////////////////////////// FRAME
//==================================================FRAME TOP HEAD

const topTexture = textureLoader.load('texture/dark-brown-wood - Copie.jpg');

topTexture.wrapS = THREE.RepeatWrapping;
topTexture.wrapT = THREE.RepeatWrapping;
topTexture.repeat.set(4, 1);

const topMaterial = new THREE.MeshStandardMaterial({
    map: topTexture
});

const topGeometry = new THREE.BoxGeometry(20.5, 0.5, 0.2);

const top_head = new THREE.Mesh(topGeometry, topMaterial);

// adjust height if needed
top_head.position.set(0, 18, 6);

// ✅ attach to wardrobe
wardrobe.add(top_head);
//===================================FRAME TOP  CHEST

const top_chest = top_head.clone();
top_chest.position.set(0,9.9,6);
wardrobe.add(top_chest);

//===================================FRAME TOP FOOT

const top_foot = top_head.clone();
top_foot.position.set(0,-10,6);
wardrobe.add(top_foot);
//===================================FRAME BASE FOOT

const base = top_head.clone();
base.position.set(0,-17.9,6);
wardrobe.add(base);

//===================================FRAME LEFT
///
const leftTexture = textureLoader.load('texture/brown-blank.jpg');

leftTexture.wrapS = THREE.RepeatWrapping;
leftTexture.wrapT = THREE.RepeatWrapping;
leftTexture.repeat.set(4, 1);

const leftMaterial = new THREE.MeshStandardMaterial({
    map: topTexture
});

const leftGeometry = new THREE.BoxGeometry(36.1, 0.5, 0.2);

const left_frame = new THREE.Mesh(leftGeometry, leftMaterial);

left_frame.position.set(10, 0.1, 6);
left_frame.rotation.z = Math.PI /2;
wardrobe.add(left_frame);

//===================================FRAME RIGHT


const right_frame = left_frame.clone();
right_frame.position.set(-10, 0.1, 6);
wardrobe.add(right_frame);


////////////////////////////////////////////////////////////// DOORS
// HEAD
//==============================================HEAD LEFT DOOR
const texturehead_left_doorLoader = new THREE.TextureLoader();

const doorTexture = texturehead_left_doorLoader.load('texture/brown-wood-textured-background-with-design-space.jpg'); // change path here

const head_left_doorMaterial = new THREE.MeshStandardMaterial({
    map: doorTexture
});

const head_left_doorGeometry = new THREE.BoxGeometry(10, 8, 0.1);
const head_left_door = new THREE.Mesh(head_left_doorGeometry, head_left_doorMaterial);

head_left_door.position.set(5, 14, 5.95);
headGroup.add(head_left_door);

//==============================================HEAD RIGHT DOOR

const head_right_doorGeometry = new THREE.BoxGeometry(10, 8, 0.1);
const head_right_door = new THREE.Mesh(head_left_doorGeometry, head_left_doorMaterial);

head_right_door.position.set(-5, 14, 6.04);
headGroup.add(head_right_door);

//CHEST
//==============================================CHEST LEFT DOOR
const chest_left_doorGeometry = new THREE.BoxGeometry(10, 20, 0.1);
const chest_left_door = new THREE.Mesh(chest_left_doorGeometry, head_left_doorMaterial);

chest_left_door.position.set(5, 0, 5.95);
chestGroup.add(chest_left_door);

//==============================================CHEST RIGHT DOOR
const chest_right_doorGeometry = new THREE.BoxGeometry(10, 20, 0.1);
const chest_right_door = new THREE.Mesh(chest_right_doorGeometry, head_left_doorMaterial);

chest_right_door.position.set(-5, 0, 6.04);
chestGroup.add(chest_right_door);


// FOOT
//==============================================FOOT LEFT DOOR
const foot_left_doorGeometry = new THREE.BoxGeometry(10, 8, 0.04);
const foot_left_door = new THREE.Mesh(head_left_doorGeometry, head_left_doorMaterial);

foot_left_door.position.set(5, -14, 5.95);
footGroup.add(foot_left_door);

//==============================================FOOT RIGHT DOOR
const foot_right_doorGeometry = new THREE.BoxGeometry(10, 8, 0.1);
const foot_right_door = new THREE.Mesh(head_left_doorGeometry, head_left_doorMaterial);

foot_right_door.position.set(-5, -14, 6.04);
footGroup.add(foot_right_door);



//==============================================GLB
// RUG
const loaderrug = new GLTFLoader();

loaderrug.load('./texture/henrik.glb', (gltf) => {
    const rug = gltf.scene;
    // Scale skin (adjust as needed)
    rug.scale.set(0.07, 0.05, 0.05);

    // Put skin ON TOP of desk
    rug.position.set(0, -18, 11);
   rug.rotation.y = Math.PI; // turn sid
    wardrobe.add(rug);
});

const loaderheel = new GLTFLoader();

loaderheel.load(
'https://raw.githubusercontent.com/Essabki/source/main/chelsea_stiletto_heel_platform_sandals.glb',
 (gltf) => {
    const heel = gltf.scene;
    // Scale skin (adjust as needed)
    heel.scale.set(10,10, 10);

    // Put skin ON TOP of desk
    heel.position.set(-12.5, -2.5, 5);
   //heel2.rotation.y = Math.PI; // turn sid
    wardrobe.add(heel);
});

const loadervsl = new GLTFLoader();

loadervsl.load(
   'https://raw.githack.com/Essabki/source/main/saint_laurent_kate_tassel_chain_wallet.glb',


 (gltf) => {
    const vsl = gltf.scene;
    // Scale skin (adjust as needed)
    vsl.scale.set(15,25,15);

    // Put skin ON TOP of desk
    vsl.position.set(12.5, 5, 5);
   //heel2.rotation.y = Math.PI; // turn sid
    wardrobe.add(vsl);
});


const loaderbag = new GLTFLoader();

loaderbag.load(
     "https://raw.githubusercontent.com/Essabki/Three.js_wardrobe.II/main/texture/glb/hundbag2.glb",

 (gltf) => {
    const bag = gltf.scene;
    bag.scale.set(6,11,8);

    bag.position.set(12.5, 0, 4.8);
   //heel2.rotation.y = Math.PI; // turn sid
    wardrobe.add(bag);
});



const loaderheel2 = new GLTFLoader();

loaderheel2.load(
  'https://raw.githubusercontent.com/Essabki/source/main/red_sandals.glb',

 (gltf) => {
    const heel2 = gltf.scene;
    // Scale skin (adjust as needed)
    heel2.scale.set(10,15, 10);

    // Put skin ON TOP of desk
    heel2.position.set(-12.5, 5, 5);
   //heel2.rotation.y = Math.PI; // turn sid
    wardrobe.add(heel2);
});

const loaderheel3 = new GLTFLoader();

loaderheel3.load(
    'https://raw.githubusercontent.com/Essabki/source/main/updated.glb',

 (gltf) => {
    const heel3 = gltf.scene;
    // Scale skin (adjust as needed)
    heel3.scale.set(10,15,10);

    // Put skin ON TOP of desk
    heel3.position.set(-12.5, -10, 4.9);
   //heel2.rotation.y = Math.PI; // turn sid
    wardrobe.add(heel3);
});


// T_SHIRT

const loader_shirt = new GLTFLoader();

loader_shirt.load('https://raw.githubusercontent.com/Essabki/source/main/t-shirt_on_hanger%20(1).glb', (gltf) => {
    const shirt = gltf.scene;
    // Scale skin (adjust as needed)
    shirt.scale.set(0.005, 0.008, 0.005);

    // Put skin ON TOP of desk
    shirt.position.set(2, 5.5, 3);
   shirt.rotation.y = Math.PI /2; // turn sid
    wardrobe.add(shirt);
});

// T_SHIRT II

const loader_shirt_II = new GLTFLoader();

loader_shirt_II.load('https://raw.githubusercontent.com/Essabki/source/main/t-shirt_on_hanger.glb', (gltf) => {
    const shirt_II = gltf.scene;
    // Scale skin (adjust as needed)
    shirt_II.scale.set(0.005, 0.008, 0.005);

    // Put skin ON TOP of desk
    shirt_II.position.set(5.5, 5.5, 3);
   shirt_II.rotation.y = Math.PI /2; // turn sid
    wardrobe.add(shirt_II);
});

// T_SHIRT III

const loader_shirt_III = new GLTFLoader();

loader_shirt_III.load('https://raw.githubusercontent.com/Essabki/source/main/hangers_and_pants.glb ', (gltf) => {
    const shirt_III = gltf.scene;
    // Scale skin (adjust as needed)
    shirt_III.scale.set(1, 1.2, 1);

    // Put skin ON TOP of desk
    shirt_III.position.set(8, 6.3, 3);
   shirt_III.rotation.y = Math.PI /2; // turn sid
    wardrobe.add(shirt_III);
});

// coat
const loader_coat = new GLTFLoader();

loader_coat.load('./texture/coat_hanger.glb', (gltf) => {
    const coat = gltf.scene;
    // Scale skin (adjust as needed)
    coat.scale.set(0.05, 0.08, 0.05);

    // Put skin ON TOP of desk
    coat.position.set(-15, -18, 12 );
   coat.rotation.y = Math.PI /2; // turn sid
    wardrobe.add(coat);
});


// SHOE CABINET 
//===============================================SHOE CABINET BACK

// CREATE GROUP
const shoe_cabinet_group = new THREE.Group();
scene.add(shoe_cabinet_group);

// MATERIAL
const shoe_cabinet_backMaterial = new THREE.MeshStandardMaterial({
    map: texture
});

// BACK
const shoe_cabinet_backGeometry = new THREE.BoxGeometry(10, 43, 0.3);
const shoe_cabinet_back = new THREE.Mesh(shoe_cabinet_backGeometry, roofMaterial);
shoe_cabinet_back.position.set(0, 1, 5);
shoe_cabinet_group.add(shoe_cabinet_back);

// FLOOR
const shoe_cabinet_floorGeometry = new THREE.BoxGeometry(10, 8, 0.3);
const shoe_cabinet_floor = new THREE.Mesh(shoe_cabinet_floorGeometry, roofMaterial);
shoe_cabinet_floor.position.set(0, -20.37, 8.9);
shoe_cabinet_floor.rotation.x = Math.PI / 2;
//shoe_cabinet_group.add(shoe_cabinet_floor);

// TOP
const shoe_cabinet_topGeometry = new THREE.BoxGeometry(10.3, 8, 0.3);
const shoe_cabinet_top = new THREE.Mesh(shoe_cabinet_topGeometry, roofMaterial);
shoe_cabinet_top.position.set(0, 22.35, 8.99);
shoe_cabinet_top.rotation.x = Math.PI / 2;
shoe_cabinet_group.add(shoe_cabinet_top);

// MID
const shoe_cabinet_midGeometry = new THREE.BoxGeometry(10, 8, 0.3);
const shoe_cabinet_mid = new THREE.Mesh(shoe_cabinet_midGeometry, roofMaterial);
shoe_cabinet_mid.position.set(0, 0, 8.9);
shoe_cabinet_mid.rotation.x = Math.PI / 2;
shoe_cabinet_group.add(shoe_cabinet_mid);

// MID TOP
const shoe_cabinet_mid_topGeometry = new THREE.BoxGeometry(10, 8, 0.3);
const shoe_cabinet_mid_top = new THREE.Mesh(shoe_cabinet_mid_topGeometry, roofMaterial);
shoe_cabinet_mid_top.position.set(0, 8, 8.9);
shoe_cabinet_mid_top.rotation.x = Math.PI / 2;
shoe_cabinet_group.add(shoe_cabinet_mid_top);

// MID TOP I
const shoe_cabinet_mid_topIGeometry = new THREE.BoxGeometry(10, 8, 0.3);
const shoe_cabinet_mid_topI = new THREE.Mesh(shoe_cabinet_mid_topIGeometry, roofMaterial);
shoe_cabinet_mid_topI.position.set(0, 16, 8.9);
shoe_cabinet_mid_topI.rotation.x = Math.PI / 2;
shoe_cabinet_group.add(shoe_cabinet_mid_topI);

// MID DOWN
const shoe_cabinet_mid_dawnGeometry = new THREE.BoxGeometry(10, 8, 0.3);
const shoe_cabinet_mid_dawn = new THREE.Mesh(shoe_cabinet_mid_dawnGeometry, roofMaterial);
shoe_cabinet_mid_dawn.position.set(0, -8, 8.9);
shoe_cabinet_mid_dawn.rotation.x = Math.PI / 2;
shoe_cabinet_group.add(shoe_cabinet_mid_dawn);

// MID DOWN I
const shoe_cabinet_mid_dawnIGeometry = new THREE.BoxGeometry(10.3, 8, 0.3);
const shoe_cabinet_mid_dawnI = new THREE.Mesh(shoe_cabinet_mid_dawnIGeometry, roofMaterial);
shoe_cabinet_mid_dawnI.position.set(0, -17, 8.99);
shoe_cabinet_mid_dawnI.rotation.x = Math.PI / 2;
shoe_cabinet_group.add(shoe_cabinet_mid_dawnI);

// LEFT
const shoe_cabinet_left = shoe_cabinet_back.clone();
shoe_cabinet_left.rotation.y = Math.PI / 2;
shoe_cabinet_left.position.set(-5, 1, 7.9);
shoe_cabinet_group.add(shoe_cabinet_left);

// RIGHT
const shoe_cabinet_right = shoe_cabinet_left.clone();
shoe_cabinet_right.position.set(5, 1, 7.9);
shoe_cabinet_group.add(shoe_cabinet_right);


shoe_cabinet_group.position.set(-30.79,-2,-10.7)
shoe_cabinet_group.scale.set(1,1.1,1);
const shoe_cabinet_group_II = shoe_cabinet_group.clone();
scene.add(shoe_cabinet_group_II);
shoe_cabinet_group_II.position.set(30.79,-2,-10.7);




//============================================== GLASS DOORS 
//===============================LEFT GLASS DOOR
const GlassGeometry = new THREE.BoxGeometry(9.69, 43, 0.1);
const GlassMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4
});

const Glass = new THREE.Mesh(GlassGeometry, GlassMaterial);
Glass.position.set(-30.8, 1, 2.16);
scene.add(Glass);

//===============================RIGHT GLASS DOOR
const Glass_IIGeometry = new THREE.BoxGeometry(9.69, 43, 0.1);

const Glass_IIMaterial = new THREE.MeshStandardMaterial({
    color: 0xffffff,
    transparent: true,
    opacity: 0.4
});

const Glass_II = new THREE.Mesh(Glass_IIGeometry, Glass_IIMaterial);

Glass_II.position.set(30.8, 1, 2.16);
scene.add(Glass_II);


//===============================DOORS SYSTEM
// LEFT GLASS
Glass.userData.side = "left";
Glass.userData.isOpen = false;
Glass.userData.closedX = Glass.position.x;
Glass.userData.targetX = Glass.position.x;

// RIGHT GLASS
Glass_II.userData.side = "right";
Glass_II.userData.isOpen = false;
Glass_II.userData.closedX = Glass_II.position.x;
Glass_II.userData.targetX = Glass_II.position.x;


//===================================LOGIC
const doors = [
    head_left_door,
    head_right_door,
    chest_left_door,
    chest_right_door,
    foot_left_door,
    foot_right_door
];
// assign side FIRST (important for logic)
head_left_door.userData.side = "left";
head_right_door.userData.side = "right";

chest_left_door.userData.side = "left";
chest_right_door.userData.side = "right";

foot_left_door.userData.side = "left";
foot_right_door.userData.side = "right";
doors.push(Glass);
doors.push(Glass_II);

// init state
doors.forEach(door => {

    // default state
    door.userData.isOpen = false;

    // store original position (REAL CLOSED POSITION)
    door.userData.closedX = door.position.x;

    // target must match start state
    door.userData.targetX = door.userData.closedX;

    // 🔥 FORCE REAL START POSITION (IMPORTANT FIX)
    door.position.x = door.userData.closedX;
});

//===================================CLICK PART


    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(doors);

    if (intersects.length > 0) {
        const door = intersects[0].object;

        // toggle open/close
        door.userData.isOpen = !door.userData.isOpen;

        const direction = door.userData.side === "left" ? -1.62 : 1.62;

        if (door.userData.isOpen) {
            door.userData.targetX = door.userData.closedX + (direction * 6);
        } else {
            door.userData.targetX = door.userData.closedX;
        }
    }
});


        // 🎮 SMART ORBIT CONTROLS (UPDATED)
        const controls = new OrbitControls(camera, renderer.domElement);

        controls.enableDamping = true;
        controls.dampingFactor = 0.05;

        // 🔥 KEY FEATURE (zoom where mouse is)
        controls.zoomToCursor = true;

        // Better navigation
        controls.enablePan = true;
        controls.screenSpacePanning = true;

        // Limits
        controls.minDistance = 2;
        controls.maxDistance = 50;
        controls.maxPolarAngle = Math.PI / 2;

        // 🎯 Better focus point (not ground center)
        controls.target.set(0, 3, 0);
        controls.update();

        // Initial camera position
        camera.position.set(0, 0, 90);


 //================================================= Animation loop
function animate() {
    requestAnimationFrame(animate);

    controls.update();

    // =========================
    // DOOR ANIMATION (SMOOTH + SAFE)
    // =========================
    doors.forEach(door => {

        if (door.userData.targetX === undefined) return;

        // smooth lerp movement
        door.position.x += (door.userData.targetX - door.position.x) * 0.12;

        // stop micro jitter
        if (Math.abs(door.userData.targetX - door.position.x) < 0.001) {
            door.position.x = door.userData.targetX;
        }
    });

    renderer.render(scene, camera);
}

animate();

        // Handle window resize
        window.addEventListener('resize', () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        });
