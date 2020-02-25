const fetch = require("node-fetch");

const headers = {
  Authorization: "Basic " + process.env.GITHUB_AUTH_STRING
};

const getAllProjects = (req, res, next) => {
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

const getTimeLineItems = (req, res, next) => {
  fetch(
    process.env.GITHUB_API_ENDPOINT + "/repos/itsSayantan/portfolio-posts/contents/meta/posts.json",
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
        if (jsonData && jsonData.content) {
          const base64Content = jsonData.content
          const stringContent = (Buffer.from(base64Content, 'base64')).toString('ascii')
          const jsonParsedContent = JSON.parse(stringContent)

          res.status(200).send(jsonParsedContent.timeLineItems || []);
        } else {
          res.status(500).send({ status: false, message: 'Invalid response from the Github API.' })
        }
      }
    })
    .catch(error => {
      console.error(error);
    });
}

module.exports = {
  getAllProjects,
  getTimeLineItems
};
