import { assert } from 'chai'
import { describe, it } from 'mocha'
import Vector3d from "../src"


function assertAlmostEqual(x, y) {
    assert(Math.abs((x - y) / x) < Number.EPSILON, `${x}, ${y}`)
}


function assertVectorEqual(vec, coords) {
    assertAlmostEqual(vec.x(), coords[0])
    assertAlmostEqual(vec.y(), coords[1])
    assertAlmostEqual(vec.z(), coords[2])
}


describe('Vector3d', () => {
    it('should create a vector with three coordinates', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6), [1.2, 3.4, 5.6])
    })
})

describe('.copy', () => {
    it('should return a deep copy of the vector', () => {
        const vec = Vector3d(1.2, 3.4, 5.6)
        assert(vec !== vec.copy())
        assertVectorEqual(vec.copy(), [1.2, 3.4, 5.6])
    })
})

describe('.x', () => {
    it('should return the X coordinate', () => {
        assertAlmostEqual(Vector3d(1.2, 3.4, 5.6).x(), 1.2)
    })
    it('should set the X coordinate', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6).x(7.8), [7.8, 3.4, 5.6])
    })
})

describe('.y', () => {
    it('should return the Y coordinate', () => {
        assertAlmostEqual(Vector3d(1.2, 3.4, 5.6).y(), 3.4)
    })
    it('should set the Y coordinate', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6).y(7.8), [1.2, 7.8, 5.6])
    })
})

describe('.z', () => {
    it('should return the Z coordinate', () => {
        assertAlmostEqual(Vector3d(1.2, 3.4, 5.6).z(), 5.6)
    })
    it('should set the Z coordinate', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6).z(7.8), [1.2, 3.4, 7.8])
    })
})

describe('.scale', () => {
    it('should scale the vector components', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6).scale(2), [2.4, 6.8, 11.2])
    })
})

describe('.r', () => {
    it('should return the l2-norm of the vector', () => {
        assertAlmostEqual(Vector3d(1.2, 3.4, 5.6).r(), 6.660330322138685)
    })
    it('should set the l2-norm of the vector', () => {
        const vec1 = Vector3d(1.2, 3.4, 5.6)
        const vec2 = vec1.r(1.5)
        assertAlmostEqual(vec2.r(), 1.5)
        assertAlmostEqual(vec2.inclination(), vec1.inclination())
        assertAlmostEqual(vec2.azimuth(), vec1.azimuth())
    })
})

describe('.inclination', () => {
    it('should return the inclination of the vector', () => {
        assertAlmostEqual(Vector3d(1.2, 3.4, 5.6).inclination(), 0.5720385882753858)
    })
    it('should set the inclination of the vector', () => {
        const vec1 = Vector3d(1.2, 3.4, 5.6)
        const vec2 = vec1.inclination(1.1)
        assertAlmostEqual(vec2.r(), vec1.r())
        assertAlmostEqual(vec2.inclination(), 1.1)
        assertAlmostEqual(vec2.azimuth(), vec1.azimuth())
    })
})

describe('.azimuth', () => {
    it('should return the azimuth of the vector', () => {
        assertAlmostEqual(Vector3d(1.2, 3.4, 5.6).azimuth(), 1.231503712340852)
        assertAlmostEqual(Vector3d(-1.2, 3.4, 5.6).azimuth(), 1.9100889412489412)
    })
    it('should set the azimuth of the vector', () => {
        const vec1 = Vector3d(1.2, 3.4, 5.6)
        const vec2 = vec1.azimuth(1.1)
        assertAlmostEqual(vec2.r(), vec1.r())
        assertAlmostEqual(vec2.inclination(), vec1.inclination())
        assertAlmostEqual(vec2.azimuth(), 1.1)
    })
})

describe('.add', () => {
    it('should add another vector to the current one', () => {
        assertVectorEqual(
            Vector3d(1.2, 3.4, 5.6).add(Vector3d(7.8, 9.1, 2.3)),
            [9.0, 12.5, 7.9]
        )
    })
})

describe('.sub', () => {
    it('should subtract another vector to the current one', () => {
        assertVectorEqual(
            Vector3d(1.2, 3.4, 5.6).sub(Vector3d(7.8, 9.1, 2.3)),
            [-6.6, -5.7, 3.3]
        )
    })
})

describe('.dot', () => {
    it('should return the scalar product of two vectors', () => {
        assertAlmostEqual(
            Vector3d(1.2, 3.4, 5.6).dot(Vector3d(7.8, 9.1, 2.3)),
            53.18
        )
    })
})

describe('.cross', () => {
    it('should return the vector product of two vectors', () => {
        assertVectorEqual(
            Vector3d(1.2, 3.4, 5.6).cross(Vector3d(7.8, 9.1, 2.3)),
            [-43.14, 40.92, -15.6]
        )
    })
})
