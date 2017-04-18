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

    var geometry = new THREE.SphereGeometry(100, 17, 17);
    var material = new THREE.MeshBasicMaterial({ color: 0xf9a75e, wireframe: false });
    var head = AvatarThreeDee.createObject("head", { y: 250 }, material, geometry);
    head.scale.y = 1.2;
    eye(head);
    nose(head);
    mouth(head);
    return head;
}

function eye(head) {
    var eye = "http://www.clipartbest.com/cliparts/pT5/Xe6/pT5Xe6RAc.png";
    var spriteMap = new THREE.TextureLoader().load(eye);
    var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(100, 30, 1);
    sprite.position.z = 100;
    sprite.position.x = 2;
    head.set(sprite);
}

function nose(head) {
    var nose = "http://bitclubs.com/img/avatar/male/5_1_nose.png";
    var spriteMap = new THREE.TextureLoader().load(nose);
    var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(150, 150, 1);
    sprite.position.z = 100;
    sprite.position.y = -25;
    sprite.position.x = 2;
    head.set(sprite);
}

function mouth(head) {
    var mouth = "http://vignette3.wikia.nocookie.net/brawloftheobjects/images/5/57/Closed_Mouth_Teeth_Smile.png/revision/latest?cb=20150419054317";
    var spriteMap = new THREE.TextureLoader().load(mouth);
    var spriteMaterial = new THREE.SpriteMaterial({ map: spriteMap, color: 0xffffff });
    var sprite = new THREE.Sprite(spriteMaterial);
    sprite.scale.set(100, 100, 1);
    sprite.position.z = 100;
    sprite.position.y = -60;
    sprite.position.x = 2;
    head.set(sprite);
}

var avatar = new Avatar();
AvatarThreeDee.addObjectModel(avatar);

var eye = AvatarThreeDee.createObject("eye", { y: 10, z: 100 });
avatar.head.set(eye);
