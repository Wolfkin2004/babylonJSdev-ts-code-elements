# Markdown for Element 5 GUI


# GUI
## Imports

``` 
import setSceneIndex from "./../index"

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
    CubeTexture,
    Sound
  } from "@babylonjs/core";
  import * as GUI from "@babylonjs/gui";
```
* This starts of with importing all data that we need for babylon js and well as the GUI.

```
function createText(scene: Scene, theText: string, x: string, y: string, s: string, c: string, advtex) {
    let text = new GUI.TextBlock();
    text.text = theText;
    text.color = c;
    text.fontSize = s;
    text.fontWeight = "bold"; //can add parameter for this if you wish
    text.left = x;
    text.top = y;
    advtex.addControl(text);
    return text;
  }
```
* This function creates text within the GUI which we can edit everything about the text from the size to the font.

```
 function createSceneButton(scene: Scene, name: string, note: string, index: number, x: string, y: string, advtex) {
    let button = GUI.Button.CreateSimpleButton(name, note);
        button.left = x;
        button.top = y;
        button.width = "80px";
        button.height = "30px";
        button.color = "white";
        button.cornerRadius = 20;
        button.background = "purple";

        /*
        const buttonClick = new Sound("MenuClickSFX", "./audio/menu-click.wav", scene, null, {
          loop: false,
          autoplay: false,
        });
        */

        button.onPointerUpObservable.add(function() {
            console.log("THE BUTTON HAS BEEN CLICKED");
           // buttonClick.play();
            setSceneIndex(index -1);
        });
        advtex.addControl(button);
        return button;
 }
```
* This function creates the scene button which plays a sound when clicked as well as displays a message which clicked.

```
  export default function menuScene(engine: Engine) {
    interface SceneData {
      scene: Scene;
      advancedTexture: GUI.AdvancedDynamicTexture;
      button1: GUI.Button;
      button2: GUI.Button;
      camera: Camera;
    }
```

* This is the main rendering section of the scene.
