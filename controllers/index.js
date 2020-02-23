const fetch = require("node-fetch");

const getAllProjects = (req, res, next) => {
  const headers = {
    Authorization: "Basic " + process.env.GITHUB_AUTH_STRING
  };

  fetch(
    process.env.GITHUB_API_ENDPOINT + "/users/itsSayantan/repos?sort=updated",
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
      if (jsonData.status) {
        res.status(jsonData.status).send(jsonData.responseBody);
      } else {
        res.status(200).send(jsonData);
      }
    })
    .catch(error => {
      console.error(error);
    });
};

module.exports = {
  getAllProjects
};
