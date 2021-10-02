const Vector3d = function(x, y, z) {
    const _ = {
        x: x,
        y: y,
        z: z
    }

    const api = {}

    api.x = () => _.x

    api.y = () => _.y

    api.z = () => _.z

    return api
}

export default Vector3d
