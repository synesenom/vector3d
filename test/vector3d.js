import { assert } from 'chai'
import { describe, it } from 'mocha'
import Vector3d from "../src"


function almostEqual(x, y) {
    assert(Math.abs((x - y) / x) < Number.EPSILON, `${x}, ${y}`)
}


function assertVectorEqual(vec, coords) {
    almostEqual(vec.x(), coords[0])
    almostEqual(vec.y(), coords[1])
    almostEqual(vec.z(), coords[2])
}


describe('Vector3d', () => {
    it('should create a vector with three coordinates', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6), [1.2, 3.4, 5.6])
    })
})

describe('.x', () => {
    it('should return the X coordinate', () => {
        almostEqual(Vector3d(1.2, 3.4, 5.6).x(), 1.2)
    })
    it('should set the X coordinate', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6).x(7.8), [7.8, 3.4, 5.6])
    })
})

describe('.y', () => {
    it('should return the Y coordinate', () => {
        almostEqual(Vector3d(1.2, 3.4, 5.6).y(), 3.4)
    })
    it('should set the Y coordinate', () => {
        assertVectorEqual(Vector3d(1.2, 3.4, 5.6).y(7.8), [1.2, 7.8, 5.6])
    })
})

describe('.z', () => {
    it('should return the Z coordinate', () => {
        almostEqual(Vector3d(1.2, 3.4, 5.6).z(), 5.6)
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

describe('.length', () => {
    it('should return the l2-norm of the vector', () => {
        almostEqual(Vector3d(1.2, 3.4, 5.6).length(), 6.660330322138685)
    })
    it('should set the l2-norm of the vector', () => {
        almostEqual(Vector3d(1.2, 3.4, 5.6).length(1.5).length(), 1.5)
    })
})

describe('.norm', () => {
    it('should set the l2-norm of the vector to 1', () => {
        almostEqual(Vector3d(1.2, 3.4, 5.6).norm().length(), 1)
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
