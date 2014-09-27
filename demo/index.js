var gl = require('webgl-context')({
	width: 256,
	height: 256
})

var shader = require('gl-basic-shader')(gl, {
	tint: [1, 0, 0, 1]
})

var quad = require('../')(gl)
quad.draw(shader)

require('domready')(function() {
	document.body.appendChild(gl.canvas)
})