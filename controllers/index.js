const fetch = require("node-fetch");

const {
  getPostData
} = require('../helpers');

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

const getGithubApiRateLimit = (req, res, next) => {
  fetch(
    process.env.GITHUB_API_ENDPOINT + "/rate_limit",
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
}

const getPostByID = (req, res, next) => {
  const id = req.params.id

  if (id) {
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
      .then(async jsonData => {
        if (jsonData && jsonData.content) {
          const base64Content = jsonData.content
          const stringContent = (Buffer.from(base64Content, 'base64')).toString('ascii')
          const jsonParsedContent = JSON.parse(stringContent)

          const githubMappingForID = jsonParsedContent.githubPathMapping[id]

          if (githubMappingForID) {
            // fetch the content of the post

            const postData = await getPostData(githubMappingForID)

            res.status(postData.code).send(postData.send)
          } else {
            // post is not found
            res.status(404).send({ status: false, message: 'The given post ID does not exist.' })
          }
        } else {
          res.status(500).send({ status: false, message: 'Invalid response from the Github API.' })
        }
      })
      .catch(error => {
        console.error(error);
      });
  } else {
    res.status(400).send({ status: false, message: 'Invalid post ID was sent.' })
  }
}

module.exports = {
  getAllProjects,
  getTimeLineItems,
  getGithubApiRateLimit,
  getPostByID
};
