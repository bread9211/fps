import * as BABYLON from "babylonjs"

const canvas = $("canvas")
const engine = new BABYLON.Engine(canvas, true)

function createScene() {
    const scene = new BABYLON.Scene(engine);
    scene.clearColor = new BABYLON.Color3.Black;
    return scene;
}

const scene = createScene();

engine.runRenderLoop(() => {
    scene.render()
})