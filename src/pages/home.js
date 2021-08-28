import { getGenresList } from "../api/getInfo.js";

import { Component } from "../core/component.js";
export default class Home extends Component {
  template() {
    return `
    <div>Home</div>
    <ul>
      ${this.$state.genreList.map((item) => {
        return `
        <li>
          <h1>${item.id}/${item.name}</h1>
        </li>
        `;
      })}
    </ul>
    `;
  }
  setup() {
    this.$state = {
      genreList: [],
      genreMovieList: [],
    };
  }
  mounted() {}
  fetchData() {
    getGenresList().then((data) => {
      this.setState({
        genreList: data.genres,
      });
      // console.log(data);
    });
  }
}
