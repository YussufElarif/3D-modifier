var element = document.getElementById("3d");
AvatarThreeDee.init(element);

function Avatar() {
    return {
        head: head(),
        upperBody: AvatarThreeDee.createObject("upperBody"),
        lowerBody: AvatarThreeDee.createObject("lowerBody", { y: -250 }),
        rightArm: AvatarThreeDee.createObject("rightArm", { x: 250 }),
        leftArm: AvatarThreeDee.createObject("leftArm", { x: -250 })
    }
}

function head() {
    var radius = 100
    var segments = 64;
    var geometry = new THREE.SphereGeometry(100, 7, 7);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00, wireframe: false });

    return AvatarThreeDee.createObject("head", { y: 250 }, material, geometry);
}

var avatar = new Avatar();

AvatarThreeDee.addObjectModel(avatar);

var child = AvatarThreeDee.createObject("randomObject", { y: 250 });
avatar.head.set(child);
child.material.color.setHex(0xffffff);
avatar.head.scale.set(1, 2, 1);

var eye = AvatarThreeDee.createObject("eye", { y: 10, z: 100 });
avatar.head.set(eye);
