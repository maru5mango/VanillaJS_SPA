// import { getPostsList } from "../api/getInfo";

// const Home = {
//   render: async () => {
//     let posts = await getPostsList();
//     let view = /*html*/ `
//             <section class="section">
//                 <h1> Home </h1>
//                 <ul>
//                     ${posts
//                       .map(
//                         (post) =>
//                           /*html*/ `<li><a href="#/p/${post.id}">${post.title}</a></li>`
//                       )
//                       .join("\n ")}
//                 </ul>
//             </section>
//         `;
//     return view;
//   },
//   after_render: async () => {},
// };

// export default Home;

import { Component } from "../core/component.js";
export default class Home extends Component {
  template() {
    return `<div>Home</div>`;
  }
}
