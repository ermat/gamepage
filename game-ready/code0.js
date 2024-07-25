gdjs.Untitled_32sceneCode = {};
gdjs.Untitled_32sceneCode.localVariables = [];
gdjs.Untitled_32sceneCode.GD_95952Objects1_1final = [];

gdjs.Untitled_32sceneCode.GD_9595Objects1_1final = [];

gdjs.Untitled_32sceneCode.GDPlayerObjects1= [];
gdjs.Untitled_32sceneCode.GDPlayerObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDpickupObjects1= [];
gdjs.Untitled_32sceneCode.GDpickupObjects2= [];
gdjs.Untitled_32sceneCode.GDduckScoreObjects1= [];
gdjs.Untitled_32sceneCode.GDduckScoreObjects2= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2= [];
gdjs.Untitled_32sceneCode.GDRBoxObjects1= [];
gdjs.Untitled_32sceneCode.GDRBoxObjects2= [];
gdjs.Untitled_32sceneCode.GDbackgroundImageObjects1= [];
gdjs.Untitled_32sceneCode.GDbackgroundImageObjects2= [];
gdjs.Untitled_32sceneCode.GDInvisiblePlatformObjects1= [];
gdjs.Untitled_32sceneCode.GDInvisiblePlatformObjects2= [];
gdjs.Untitled_32sceneCode.GDpanelObjects1= [];
gdjs.Untitled_32sceneCode.GDpanelObjects2= [];
gdjs.Untitled_32sceneCode.GDpichliacObjects1= [];
gdjs.Untitled_32sceneCode.GDpichliacObjects2= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1= [];
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2= [];
gdjs.Untitled_32sceneCode.GDspikeValTextObjects1= [];
gdjs.Untitled_32sceneCode.GDspikeValTextObjects2= [];
gdjs.Untitled_32sceneCode.GDmovingPlatform1Objects1= [];
gdjs.Untitled_32sceneCode.GDmovingPlatform1Objects2= [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1= [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2= [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1= [];
gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects2= [];
gdjs.Untitled_32sceneCode.GDjumpObjects1= [];
gdjs.Untitled_32sceneCode.GDjumpObjects2= [];
gdjs.Untitled_32sceneCode.GD_9595Objects1= [];
gdjs.Untitled_32sceneCode.GD_9595Objects2= [];
gdjs.Untitled_32sceneCode.GD_95952Objects1= [];
gdjs.Untitled_32sceneCode.GD_95952Objects2= [];
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1= [];
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects2= [];
gdjs.Untitled_32sceneCode.GDiconHedgehogObjects1= [];
gdjs.Untitled_32sceneCode.GDiconHedgehogObjects2= [];
gdjs.Untitled_32sceneCode.GDiconDuckObjects1= [];
gdjs.Untitled_32sceneCode.GDiconDuckObjects2= [];


gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Untitled_32sceneCode.GDPlayerObjects1});
gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmovingPlatform1Objects1Objects = Hashtable.newFrom({"movingPlatform1": gdjs.Untitled_32sceneCode.GDmovingPlatform1Objects1});
gdjs.Untitled_32sceneCode.eventsList0 = function(runtimeScene) {

{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("movingPlatform1"), gdjs.Untitled_32sceneCode.GDmovingPlatform1Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.platform.isOnPlatform(gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDPlayerObjects1Objects, "PlatformerObject", gdjs.Untitled_32sceneCode.mapOfGDgdjs_9546Untitled_959532sceneCode_9546GDmovingPlatform1Objects1Objects, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{



}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("run");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDPlayerObjects1[k] = gdjs.Untitled_32sceneCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Untitled_32sceneCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.Untitled_32sceneCode.GD_95952Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) > runtimeScene.getGame().getVariables().getFromIndex(2).getAsNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GD_95952Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "q");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("_2"), gdjs.Untitled_32sceneCode.GD_95952Objects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GD_95952Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GD_95952Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GD_95952Objects2[k] = gdjs.Untitled_32sceneCode.GD_95952Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GD_95952Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GD_95952Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GD_95952Objects1_1final.indexOf(gdjs.Untitled_32sceneCode.GD_95952Objects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GD_95952Objects1_1final.push(gdjs.Untitled_32sceneCode.GD_95952Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GD_95952Objects1_1final, gdjs.Untitled_32sceneCode.GD_95952Objects1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() * 0.9);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.Untitled_32sceneCode.GD_9595Objects1.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) < runtimeScene.getGame().getVariables().getFromIndex(1).getAsNumber();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.Untitled_32sceneCode.GD_9595Objects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(runtimeScene.getObjects("_"), gdjs.Untitled_32sceneCode.GD_9595Objects2);
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GD_9595Objects2.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GD_9595Objects2[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_1 = true;
        gdjs.Untitled_32sceneCode.GD_9595Objects2[k] = gdjs.Untitled_32sceneCode.GD_9595Objects2[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GD_9595Objects2.length = k;
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.Untitled_32sceneCode.GD_9595Objects2.length; j < jLen ; ++j) {
        if ( gdjs.Untitled_32sceneCode.GD_9595Objects1_1final.indexOf(gdjs.Untitled_32sceneCode.GD_9595Objects2[j]) === -1 )
            gdjs.Untitled_32sceneCode.GD_9595Objects1_1final.push(gdjs.Untitled_32sceneCode.GD_9595Objects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.Untitled_32sceneCode.GD_9595Objects1_1final, gdjs.Untitled_32sceneCode.GD_9595Objects1);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() * 1.1);
}{gdjs.evtTools.camera.setCameraZoom(runtimeScene, runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber(), "", 0);
}{gdjs.evtTools.camera.centerCamera(runtimeScene, (gdjs.Untitled_32sceneCode.GDPlayerObjects1.length !== 0 ? gdjs.Untitled_32sceneCode.GDPlayerObjects1[0] : null), true, "", 0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[i].IsDirectionPushed4Way("Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[i].IsDirectionPushed4Way("Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick"), gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[k] = gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlatLightJoystick2"), gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1[i].IsDirectionPushed4Way("Up", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1[k] = gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("jump"), gdjs.Untitled_32sceneCode.GDjumpObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDjumpObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDjumpObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDjumpObjects1[k] = gdjs.Untitled_32sceneCode.GDjumpObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDjumpObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("LeftArrowRoundButton"), gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RightArrowRoundButton"), gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("TopArrowRoundButton"), gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1[i].getBehavior("ButtonFSM").IsPressed((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1[k] = gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Untitled_32sceneCode.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Untitled_32sceneCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Untitled_32sceneCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


};

gdjs.Untitled_32sceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32sceneCode.GDPlayerObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDPlayerObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpickupObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpickupObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDduckScoreObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDduckScoreObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewTiledSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRBoxObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRBoxObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundImageObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDbackgroundImageObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDInvisiblePlatformObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDInvisiblePlatformObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpanelObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpanelObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDpichliacObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDpichliacObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDNewSprite2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDspikeValTextObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDspikeValTextObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDmovingPlatform1Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDmovingPlatform1Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystickObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects1.length = 0;
gdjs.Untitled_32sceneCode.GDFlatLightJoystick2Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDjumpObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDjumpObjects2.length = 0;
gdjs.Untitled_32sceneCode.GD_9595Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_9595Objects2.length = 0;
gdjs.Untitled_32sceneCode.GD_95952Objects1.length = 0;
gdjs.Untitled_32sceneCode.GD_95952Objects2.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDLeftArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDRightArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDTopArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDiconHedgehogObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDiconHedgehogObjects2.length = 0;
gdjs.Untitled_32sceneCode.GDiconDuckObjects1.length = 0;
gdjs.Untitled_32sceneCode.GDiconDuckObjects2.length = 0;

gdjs.Untitled_32sceneCode.eventsList0(runtimeScene);

return;

}

gdjs['Untitled_32sceneCode'] = gdjs.Untitled_32sceneCode;
