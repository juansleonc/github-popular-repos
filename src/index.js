require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3000;
const githubUser = process.env.GITHUB_USER;

class GitHubService {
  constructor(user) {
    this.user = user;
    this.apiURL = `https://api.github.com/users/${user}/repos`;
  }

  async fetchPopularRepos() {
    try {
      const response = await axios.get(this.apiURL);
      const repos = response.data;
      return repos
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .slice(0, 10);
    } catch (error) {
      throw new Error('Error fetching repositories');
    }
  }
}

class RepoController {
  constructor(service) {
    this.service = service;
  }

  async getPopularRepos(req, res) {
    try {
      const repos = await this.service.fetchPopularRepos();
      res.json(repos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  }
}

const gitHubService = new GitHubService(githubUser);
const repoController = new RepoController(gitHubService);

app.get('/repos', (req, res) => repoController.getPopularRepos(req, res));
app.get('/', (req, res) => {
  res.redirect('/repos');
});
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
