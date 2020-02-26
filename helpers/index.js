const fetch = require('node-fetch')

const headers = {
    Authorization: "Basic " + process.env.GITHUB_AUTH_STRING
};

const getPostData = (githubEndpoint) => {
    return new Promise(resolve => {
        fetch(
            githubEndpoint,
            {
                headers
            }
        )
            .then(response => {
                if (response.status === 403) {
                    return {
                        status: 403,
                        responseBody: {
                            status: false,
                            message:
                                "You are forbidden to perform this action. This might be due to the rate limiting in Github APIs. Please try again after some time."
                        }
                    };
                }
                return response.json();
            })
            .then(jsonData => {
                if (jsonData && jsonData.content) {
                    const base64Content = jsonData.content
                    const stringContent = (Buffer.from(base64Content, 'base64')).toString('utf-8')

                    resolve({ code: 200, send: { status: true, message: "Post data was fetched successfully", data: stringContent } })
                } else {
                    resolve({ code: 500, send: { status: false, message: 'Invalid response from the Github API.' } })
                }
            })
            .catch(error => {
                console.error(error);
            });
    })
}

module.exports = {
    getPostData
}