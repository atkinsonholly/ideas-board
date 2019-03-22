import { Component } from 'react';

const API = 'http://localhost:3000/api/v1';

export default class Adapter extends Component {

  constructor() {
    super()
    this.headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
  }

  static fetchIdeas = async() => {
    const response = await fetch(API + "/ideas", { headers: this.headers })
    const json = await response.json()
    return json;
  }

  static deleteIdea = async(id) => {
    return await fetch(API + `/ideas/${id}`, {
      method: 'DELETE',
      headers: this.headers
    })
    .then(resp => resp.json())
    .then(data => {return data});
  }

  static newIdea = async () => {
    return await fetch(API + `/ideas/new`, {
      method: 'POST',
      headers: this.headers
    })
    .then(resp => resp.json())
    .then(data => {return data});
  }

  // PUT requires different headers to above to ensure the body is parsed
  // returns 'true'
  // not cacheable
  static updateIdea = async (id, idea) => {
    return await fetch(API + `/ideas/${id}`, {
      method: 'PUT',
      body: JSON.stringify({idea: idea}),
      headers: {
        'Content-Type': 'application/json',
        'Content-Encoding': 'identity'
      }
    })
    .then(resp => resp.json())
    .then(data => {return data});
  }

}
