const { minimumDistance, obstacleCoordinates, hashInterval } = require('../../config.json');
const { euclidean } = require('ml-distance-euclidean'); 

const obstacles = obstacleCoordinates; 
const robotPosOverTime = []; 

const findNearestObstacle = (vector) => {
    for (const obstacle of obstacles) {
        const distance = euclidean(vector, obstacle);

        if (distance <= minimumDistance) {
            // more code here 
        }
    }
}

const calculateAverageVector = () => {
    if (robotPosOverTime.length >= hashInterval) {
        const normalizedVectors = []; 
        const averageVector = [];

        for (const vector of robotPosOverTime) {
            const vectorSum = vector.reduce((acc, val) => acc + val, 0);
            const rootVectorSum = Math.sqrt(vectorSum);

            const newVector = [];
            for (let i = 0; i < vector.length; i++) {
                newVector.push(vector[i] / rootVectorSum);
            }

            normalizedVectors.push(newVector);
        }

        const normalizedVectorSums = normalizedVectors.reduce((acc, val) => {
            for (let k = 0; k < val.length; k++) {
                acc[k] = (acc[k] || 0) + val[k];
            }

            return acc; 
        }, []); 

        for (const sum of normalizedVectorSums) {
            averageVector.push(sum / normalizedVectors.length);
        }

        return averageVector;
    }
}