import { vec3, mat3, vec4 } from "gl-matrix";
 
 
/**
* Compute the maximum distance of two planes that still touch the cube.
*
* The cube is described by dimensions, and direction. Assume the cube is centered at the world origin.
* Direction - a 3x3 matrix that describes the direction of the cube relative to the world frame.
* Dimensions - a 3x1 vector that describes the dimensions of the cube.
*
* Normal - a 3x1 vector that describes the normal direction of
*/
function getMaxDistance(
 dimensions: vec3,
 direction: mat3,
 normal: vec3
): number {
	// Reference: A modified version of https://forums.cgsociety.org/t/math-area-of-plane-intersecting-cube-given-plane-normal/776808/2

	// 1. Reorienting normal vector (transformation assuming cube at origin)
	let newNormal = vec3.create();
	vec3.transformMat3(newNormal, normal, direction);

	if (newNormal[0] === 0 && newNormal[1] === 0 && newNormal[2] === 1) {
		return dimensions[2];
	} else if (newNormal[0] === 0 && newNormal[1] === 1 && newNormal[2] === 0) {
		return dimensions[1];
	} else if (newNormal[0] === 1 && newNormal[1] === 0 && newNormal[2] === 0) {
		return dimensions[2];
	}

	let p1 = vec3.create(); // parametric point of plane 1
	let p2 = vec3.create(); // parametric point of plane 2

	// Cube vertices and edges
	let v1 = vec3.create();
	let v2 = vec3.create();
	let v3 = vec3.create();
	let v4 = vec3.create();
	let v5 = vec3.create();
	let v6 = vec3.create();
	let v7 = vec3.create();
	let v8 = vec3.create();

	vec3.set(v1, 0, 0, 0);
	vec3.set(v2, dimensions[0], 0, 0);
	vec3.set(v3, 0, dimensions[1], 0);
	vec3.set(v4, 0, 0, dimensions[2]);
	vec3.set(v5, dimensions[0], 0, dimensions[2]); // point right above v2
	vec3.set(v6, 0, dimensions[1], dimensions[2]); // point right above v3
	vec3.set(v7, dimensions[0], dimensions[1], 0); // fourth point at z = 0
	vec3.set(v8, dimensions[0], dimensions[1], dimensions[2]); // point right above v7


}
 
 
// trivial case
console.assert(
 1 === getMaxDistance([1, 1, 1], [1, 0, 0, 0, 1, 0, 0, 0, 1], [1, 0, 0])
);
