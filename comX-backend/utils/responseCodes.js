/* 3 types of response code
    - success
    - serverError
    - clientError
*/    
const responseCodes = {
    success: {
        ok: (res, data, message = 'Success') => {
            return res.status(200).json({
                status: 200,
                message: message,
                data: data
            });
        },
        created: (res, data, message = 'Resource created successfully') => {
            return res.status(201).json({
                status: 201,
                message: message,
                data: data
            });
        }
    },
    clientError: {
        badRequest: (res, message = 'Bad Request') => {
            return res.status(400).json({
                status: 400,
                message: message
            });
        },
        unauthorized: (res, message = 'Unauthorized') => {
            return res.status(401).json({
                status: 401,
                message: message
            });
        },
        forbidden: (res, message = 'Forbidden') => {
            return res.status(403).json({
                status: 403,
                message: message
            });
        },
        notFound: (res, message = 'Resource not found') => {
            return res.status(404).json({
                status: 404,
                message: message
            });
        }
    },
    serverError: {
        internalServerError: (res, message = 'Internal Server Error') => {
            return res.status(500).json({
                status: 500,
                message: message
            });
        },
        serviceUnavailable: (res, message = 'Service Unavailable') => {
            return res.status(503).json({
                status: 503,
                message: message
            });
        }
    }
};

module.exports = responseCodes;
