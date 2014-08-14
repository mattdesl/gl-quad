var createBuffer = require('gl-buffer')
var createVAO = require('gl-vao')

function Quad(gl) {
    if (!(this instanceof Quad))
        return new Quad(gl)
    this.gl = gl

    this.vertices = createBuffer(gl, 
                new Float32Array([-1, -1,
                    -1, 1,
                    1, 1,
                    1, -1]), 
                gl.ARRAY_BUFFER, 
                gl.STATIC_DRAW)

    this.texcoords = createBuffer(gl, 
                new Float32Array([0, 1,
                    0, 0,
                    1, 0,
                    1, 1]), 
                gl.ARRAY_BUFFER, 
                gl.STATIC_DRAW)

    this.elements = createBuffer(gl, 
                new Uint16Array([0, 1, 2, 0, 2, 3]), 
                gl.ELEMENT_ARRAY_BUFFER,
                gl.STATIC_DRAW)

    this.vao = createVAO(gl, [
        { 
            buffer: this.vertices,
            size: 2,
            noramlized: false,
        },
        {
            buffer: this.texcoords,
            size: 2,
            normalized: false
        }
    ], this.elements)

}

Quad.prototype.draw = function(shader) {
    if (shader) 
        shader.bind()
    this.vao.bind()
    this.vao.draw(gl.TRIANGLES, 6)
    this.vao.unbind()
}

Quad.prototype.dispose = function() {
    this.vertices.dispose()
    this.texcoords.dispose()
    this.elements.dispose()
    this.vao.dispose()
    this.gl = null
}

module.exports = Quad