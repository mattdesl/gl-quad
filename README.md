# gl-quad

[![unstable](http://badges.github.io/stability-badges/dist/unstable.svg)](http://github.com/badges/stability-badges)

Creates an indexed quad that you can draw. 

```js
var gl = require('webgl-context')

var quad = require('gl-quad')(gl)
quad.draw( myShader )
```

The passed shader is expected to have `position` and `uv` attributes.

## Usage

[![NPM](https://nodei.co/npm/gl-quad.png)](https://nodei.co/npm/gl-quad/)

## functions

### ```var quad = createQuad(gl)```

Creates a new quad with position and texcoord buffers.

### ```quad.draw(shader)```

Draws the quad with a gl-shader. The passed shader should have `position` and `uv` pointers (`vec2`).

### ```quad.dispose()```

Disposes the quad.

## members

```quad.vertices```

The vertex buffer.

```quad.texcoords```

The texcoord buffer.

```quad.elements```

The element buffer.

```quad.vao```

The Vertex Array Object backing this quad.

## License

MIT, see [LICENSE.md](http://github.com/mattdesl/gl-quad/blob/master/LICENSE.md) for details.
