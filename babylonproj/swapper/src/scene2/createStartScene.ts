// import "@babylonjs/core/Debug/debugLayer";
// import "@babylonjs/inspector";
import {
  Scene,
  ArcRotateCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Mesh,
  Light,
  Camera,
  Engine,
  StandardMaterial,
  Texture,
  Color3,
  PointLight,
  DirectionalLight,
  SpotLight,
  
} from "@babylonjs/core";


function createCylinder(scene: Scene) {
  let cylinder = MeshBuilder.CreateCylinder(
    "cylinder",
    { height: 1, diameter: 0.7 },
    scene
  );
  cylinder.position.x = 1;
  cylinder.position.y = 1;
  cylinder.position.z = 1;

  var texture = new StandardMaterial("reflective", scene);
  texture.ambientTexture = new Texture("./assets/textures/reflectivity.png", scene);
  texture.diffuseColor = new Color3(1, 1, 1);
  cylinder.material = texture;
  return cylinder;
}

function createPointLight(scene: Scene ){
const light = new PointLight("light", new Vector3(-1, 1, 0),scene);
light.position = new Vector3(5, 20, 10);
light.intensity = 0.3;
light.diffuse = new Color3(0.5, 1, 1);
light.specular = new Color3(0.8, 1, 1);
return light;
}

function createDirectionalLight(scene: Scene ){
const light = new DirectionalLight("light", new Vector3(0.2, -1, 0.2),scene);
light.position = new Vector3(20, 40, 20);
light.intensity = 0.7;
light.diffuse = new Color3(1, 0, 0);
light.specular = new Color3(0, 1, 0);
return light;
}

function createSpotLight(scene: Scene ){
const light = new SpotLight("light", new Vector3(1, 5, -3), 
 new Vector3(0, -1, 0), Math.PI / 3, 20, scene);
light.intensity = 0.5;
light.diffuse = new Color3(1, 0, 0);
light.specular = new Color3(0, 1, 0);
return light;
}

function createHemisphericLight(scene: Scene ){
const light:HemisphericLight = new HemisphericLight("light", new Vector3(1, 10, 0),scene);
light.intensity = 0.3;
light.diffuse = new Color3(1, 0, 0);
light.specular = new Color3(0, 1, 0);
light.groundColor = new Color3(0, 1, 0);
return light;
}


function createLight(scene: Scene) {
  const light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);
  light.intensity = 0.7;
  return light;
}

function createSphere(scene: Scene) {
  let sphere = MeshBuilder.CreateSphere(
    "sphere",
    { diameter: 2, segments: 32 },
    scene,
  );
  sphere.position.y = 1;
  return sphere;
}

function createGround(scene: Scene) {
  let ground = MeshBuilder.CreateGround(
    "ground",
    { width: 6, height: 6 },
    scene,
  );
  return ground;
}

function createArcRotateCamera(scene: Scene) {
  let camAlpha = -Math.PI / 2,
    camBeta = Math.PI / 2.5,
    camDist = 10,
    camTarget = new Vector3(0, 0, 0);
  let camera = new ArcRotateCamera(
    "camera1",
    camAlpha,
    camBeta,
    camDist,
    camTarget,
    scene,
  );
  camera.attachControl(true);
  return camera;
}

export default function createStartScene(engine: Engine) {
  interface SceneData {
    scene: Scene;
    cylinder?: Mesh;
    light?: Light;
    sphere?: Mesh;
    ground?: Mesh;
    camera?: Camera;
    lightBulb?: PointLight,
    lightDirectional?: DirectionalLight,
    lightSpot?: SpotLight,
    lightHemispheric?: HemisphericLight,
 
  }

  let that: SceneData = { scene: new Scene(engine) };
  // that.scene.debugLayer.show();

  that.cylinder = createCylinder(that.scene);
  that.light = createLight(that.scene);
  that.sphere = createSphere(that.scene);
  that.ground = createGround(that.scene);
  that.camera = createArcRotateCamera(that.scene);
  that.lightBulb = createPointLight(that.scene);
  that.lightDirectional = createDirectionalLight(that.scene);
  that.lightHemispheric = createHemisphericLight(that.scene);
  return that;
}