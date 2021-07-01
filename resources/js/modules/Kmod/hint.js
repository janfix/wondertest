import $ from "jquery";
import Konva from "konva";

export default function addHint(stage, layer) {


    var hint = Konva.Image.fromURL('images/hint.svg', function(hintNode) {
        hintNode.setAttrs({
            id: "hint",
            name: "hintGroup",
            draggable: true,
            x: 50,
            y: stage.height() - 100,
            scaleX: 0.2,
            scaleY: 0.2,
            visible: false
        });
        var LightBase64 = 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNDMyLjQgNDMyLjQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQzMi40IDQzMi40OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+DQo8Zz4NCgk8Zz4NCgkJPGc+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTIxNi41MjksOTMuMmMtNjEuMiwwLTExMS4yLDUwLTExMS4yLDExMS4yYzAsMzIsMTQsNjIuOCwzNy42LDgzLjZjMTcuNiwxNy42LDE2LDU1LjIsMTUuNiw1NS42DQoJCQkJYzAsMiwwLjQsMy42LDIsNS4yYzEuMiwxLjIsMy4yLDIsNC44LDJoMTAyYzIsMCwzLjYtMC44LDQuOC0yYzEuMi0xLjIsMi0zLjIsMi01LjJjMC0wLjQtMi0zOCwxNS42LTU1LjYNCgkJCQljMC40LTAuNCwwLjgtMC44LDEuMi0xLjJjMjMuMi0yMS4yLDM2LjgtNTEuMiwzNi44LTgyLjRDMzI3LjcyOSwxNDMuMiwyNzcuNzI5LDkzLjIsMjE2LjUyOSw5My4yeiBNMjgwLjUyOSwyNzcuNg0KCQkJCWMtMC40LDAuNC0xLjIsMS4yLTEuMiwxLjZjLTE1LjYsMTYuOC0xOC40LDQ0LjQtMTguOCw1Ny42aC04OC40Yy0wLjQtMTMuMi0zLjItNDItMjAtNTkuMmMtMjEuMi0xOC40LTMzLjYtNDUuMi0zMy42LTczLjYNCgkJCQljMC01NCw0My42LTk3LjYsOTcuNi05Ny42czk3LjYsNDMuNiw5Ny42LDk3LjZDMzEzLjcyOSwyMzIuNCwzMDEuNzI5LDI1OS4yLDI4MC41MjksMjc3LjZ6Ii8+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTIxNi4xMjksMTIxLjZjLTMuNiwwLTYuOCwzLjItNi44LDYuOGMwLDMuNiwzLjIsNi44LDYuOCw2LjhjNDAuNCwwLDcyLjgsMzIuOCw3Mi44LDcyLjgNCgkJCQljMCwzLjYsMy4yLDYuOCw2LjgsNi44YzMuNiwwLDYuOC0zLjIsNi44LTYuOEMzMDIuOTI5LDE2MC40LDI2NC4xMjksMTIxLjYsMjE2LjEyOSwxMjEuNnoiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMyMzFGMjA7IiBkPSJNMjYwLjUyOSwzNTguNGgtODguOGMtOS4yLDAtMTYuOCw3LjYtMTYuOCwxNi44czcuNiwxNi44LDE2LjgsMTYuOGg4OC40DQoJCQkJYzkuNi0wLjQsMTcuMi03LjYsMTcuMi0xNi44QzI3Ny4zMjksMzY2LDI2OS43MjksMzU4LjQsMjYwLjUyOSwzNTguNHogTTI2MC41MjksMzc4aC04OC44Yy0xLjYsMC0zLjItMS4yLTMuMi0zLjINCgkJCQlzMS4yLTMuMiwzLjItMy4yaDg4LjRjMS42LDAsMy4yLDEuMiwzLjIsMy4yUzI2Mi4xMjksMzc4LDI2MC41MjksMzc4eiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0yNDcuMzI5LDM5OC44aC02Mi40Yy05LjIsMC0xNi44LDcuNi0xNi44LDE2LjhzNy42LDE2LjgsMTYuOCwxNi44aDYyLjQNCgkJCQljOS4yLDAsMTYuOC03LjYsMTYuOC0xNi44QzI2NC4xMjksNDA2LDI1Ni41MjksMzk4LjgsMjQ3LjMyOSwzOTguOHogTTI0Ny4zMjksNDE4LjRoLTYyLjRjLTEuNiwwLTMuMi0xLjItMy4yLTMuMg0KCQkJCXMxLjItMy4yLDMuMi0zLjJoNjIuNGMxLjYsMCwzLjIsMS4yLDMuMiwzLjJTMjQ4LjkyOSw0MTguNCwyNDcuMzI5LDQxOC40eiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0yMTYuMTI5LDYwYzQsMCw2LjgtMy4yLDYuOC02LjhWNi44YzAtMy42LTMuMi02LjgtNi44LTYuOGMtMy42LDAtNi44LDMuMi02LjgsNi44djQ2LjQNCgkJCQlDMjA5LjMyOSw1Ni44LDIxMi41MjksNjAsMjE2LjEyOSw2MHoiLz4NCgkJCTxwYXRoIHN0eWxlPSJmaWxsOiMyMzFGMjA7IiBkPSJNMzI5LjMyOSwzNC40Yy0zLjItMi40LTcuMi0xLjItOS4yLDEuNmwtMjUuNiwzOC40Yy0yLjQsMy4yLTEuNiw3LjYsMS42LDkuNg0KCQkJCWMxLjIsMC44LDIuNCwxLjIsMy42LDEuMmMyLjQsMCw0LjQtMS4yLDUuNi0zLjJsMjUuNi0zOC40QzMzMy4zMjksNDAuOCwzMzIuNTI5LDM2LjQsMzI5LjMyOSwzNC40eiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0xMzQuOTI5LDgzLjZjMS4yLDAsMi40LTAuNCwzLjYtMS4yYzMuMi0yLDQtNi40LDItOS42bC0yNC44LTM4LjhjLTItMy4yLTYuNC00LTkuNi0yDQoJCQkJcy00LDYuNC0yLDkuNmwyNC44LDM4LjhDMTMwLjUyOSw4Mi44LDEzMi41MjksODMuNiwxMzQuOTI5LDgzLjZ6Ii8+DQoJCQk8cGF0aCBzdHlsZT0iZmlsbDojMjMxRjIwOyIgZD0iTTg2LjUyOSwxMjZsLTQwLjQtMjJjLTMuMi0xLjYtNy42LTAuNC05LjIsMi44Yy0yLDMuMi0wLjgsNy42LDIuOCw5LjJsNDAuNCwyMg0KCQkJCWMxLjIsMC40LDIsMC44LDMuMiwwLjhjMi40LDAsNC44LTEuMiw2LTMuNkM5MC45MjksMTMyLDg5LjcyOSwxMjcuNiw4Ni41MjksMTI2eiIvPg0KCQkJPHBhdGggc3R5bGU9ImZpbGw6IzIzMUYyMDsiIGQ9Ik0zOTUuNzI5LDEwNi44Yy0xLjYtMy4yLTYtNC40LTkuMi0yLjhsLTQwLjgsMjJjLTMuMiwxLjYtNC40LDYtMi44LDkuMmMxLjIsMi40LDMuNiwzLjYsNiwzLjYNCgkJCQljMS4yLDAsMi40LTAuNCwzLjItMC44bDQwLjgtMjJDMzk2LjEyOSwxMTQuNCwzOTcuMzI5LDExMCwzOTUuNzI5LDEwNi44eiIvPg0KCQk8L2c+DQoJPC9nPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=';
        hintNode.setAttr('source', LightBase64); // Path to hint image !!!
        console.log(hintNode)
        layer.add(hintNode);
        layer.batchDraw();
    });



    $("#hintactivate").on("change", function() {
        if (stage.findOne("#hint").visible() == true) {
            stage.findOne("#hint").visible(false);
            layer.batchDraw();
        } else {
            stage.findOne("#hint").visible(true);
            layer.batchDraw();
        }
    })

    return hint;
}