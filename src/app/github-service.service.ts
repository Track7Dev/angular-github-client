import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  private user : String;
  private repo : String;
  private server : String;
  constructor() { 
    this.server = window.location.origin;
  }
  findUser = (user: String) => {
    if(user) this.user = user;
    this.repo = null;
    return axios.post(`${this.server}/github`, {handle: `https://api.github.com/users/${this.user}`}).catch((err) => console.log("USER NOT FOUND"));
  } 
  getRepos = (user: String) => {
    if(user) this.user = user;
    this.repo = null;
    return axios.post(`${this.server}/github`, {handle: `https://api.github.com/users/${this.user}/repos`}).catch((err) => console.log("REPOS NOT FOUND"));
  } 
  getRepo = (repo : String) => {
    if(repo) this.repo = repo;
    return axios.post(`${this.server}/github`, {handle: `https://api.github.com/repos/${this.user}/${this.repo}`}).catch((err) => console.log("REPO NOT FOUND"));
  } 
  
}
