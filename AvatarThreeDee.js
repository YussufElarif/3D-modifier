var AvatarThreeDee = (function (scene) {
    var camera, scene, renderer;
    var geometry, material;

    var init = function (ele) {
        scene = new THREE.Scene();
        camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
        camera.position.z = 1000;

        renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth, window.innerHeight);

        ele.appendChild(renderer.domElement);
        animate();
    }

    var animate = function () {
        requestAnimationFrame(animate);

        document.onkeydown = checkKey;

        renderer.render(scene, camera);
    }

    function checkKey(e) {

        e = e || window.event;

        if (e.keyCode == '38') {
            scene.rotation.x -= 0.02;
        }
        else if (e.keyCode == '40') {
            scene.rotation.x += 0.02;
        }
        else if (e.keyCode == '37') {
            scene.rotation.y -= 0.02;
        }
        else if (e.keyCode == '39') {
            console.log(scene);
            scene.rotation.y += 0.02;
        }
    }

    var createObject = function (name, positions, material = new THREE.MeshBasicMaterial({ color: 0x00ff7f, wireframe: true }), geometry = new THREE.BoxGeometry(200, 200, 200)) {
        var mesh = new THREE.Mesh(geometry, material);
        mesh.name = name;
        for (var key in positions) {
            if (!mesh.position.hasOwnProperty(key)) continue;
            mesh.position[key] = positions[key];
        }

        // Bad code, need to find a better way of doing this
        mesh["set"] = setObject.bind(null, mesh);
        return mesh;
    }

    var getObjectByName = function (name) {
        var object = scene.getObjectByName(name);
        object["set"] = setObject.bind(null, object);
        return object;
    }

    var setObject = function (parent, child) {
        parent.add(child);
    }

    var addObjectModel = function (objects) {
        for (var key in objects) {
            if (!objects.hasOwnProperty(key)) continue;
            scene.add(objects[key]);
        }
    }

    var addObject = function (object) {
        scene.add(object);
    }

    return {
        init: init,
        createObject: createObject,
        getObjectByName: getObjectByName,
        addObject: addObject,
        addObjectModel: addObjectModel
    }
})();