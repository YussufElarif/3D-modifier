AvatarThreeDee.init();

function Avatar() {
    return {
        head: AvatarThreeDee.createObject("head", { y: 250 }),
        upperBody: AvatarThreeDee.createObject("upperBody"),
        lowerBody: AvatarThreeDee.createObject("lowerBody", { y: -250 }),
        rightArm: AvatarThreeDee.createObject("rightArm", { x: 250 }),
        leftArm: AvatarThreeDee.createObject("leftArm", { x: -250 })
    }
}

var avatar = new Avatar();

AvatarThreeDee.addObjectModel(avatar);

avatar.head.set(new Avatar().head);


