import { assert } from 'chai'
import { describe, it } from 'mocha'
import Vector3d from "../src"


function almostEqual(x, y) {
    assert(Math.abs((x - y) / x) < Number.EPSILON)
}


function assertVectorEqual(vec, coords) {
    almostEqual(vec.x(), coords[0])
    almostEqual(vec.y(), coords[1])
    almostEqual(vec.z(), coords[2])
}


describe('Vector3d', () => {
    it('should create a vector with three coordinates', () => {
        const vec = Vector3d(1.2, 3.4, 5.6)
        assertVectorEqual(vec, [1.2, 3.4, 5.6])
    })
})

describe('.add', () => {
    it('should add another vector to the current one', () => {
        const vec1 = Vector3d(1.2, 3.4, 5.6)
        const vec2 = Vector3d(7.8, 9.1, 2.3)
        assertVectorEqual(vec1.add(vec2), [9.0, 12.5, 7.9])
    })
})
