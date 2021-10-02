import { assert } from 'chai'
import { describe, it } from 'mocha'
import Vector3d from "../src"


describe('Vector3d', () => {
    it('should create a vector with three coordinates', () => {
        const vec = Vector3d(1.2, 3.4, 5.6)
        assert(vec.x() === 1.2, 'Vector has wrong X coordinate')
        assert(vec.y() === 3.4, 'Vector has wrong X coordinate')
        assert(vec.z() === 5.6, 'Vector has wrong X coordinate')
    })
})
