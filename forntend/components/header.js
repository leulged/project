class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const username = localStorage.getItem('username');
    console.log(username)

    this.innerHTML = `
    <header>
    <div class="city_container">
      <img src="Adama_City_F.C.svg.png" alt="Adama City Football Club Logo" width="200" height="200">
    </div>
    <div class="container">
      <div>
        <nav>
          <ul>
            <li><a href="home.html">Home</a></li>
            <li><a href="shop.html">Shop</a></li>
            <li><a href="fixtures.html">Fixtures</a></li>
            <li><a href="#tickets">Tickets</a></li>
            <li><a href="players.html">Players</a></li>
            <li><a href="#about">About</a></li>
          </ul>
        </nav>
      </div>
      <div class="right">
        <nav>
          <ul>
            ${isLoggedIn ? `
              <li><a href="#" id="username">Welcome ${username}</a></li>
              <li><a href="#" id="logout">Logout</a></li>
            ` : `
              <li><a href="login.html">Login</a></li>
            `}
          </ul>
        </nav>
      </div>
    </div>
  </header>  
    `;

    if (isLoggedIn) {
      document.getElementById('logout').addEventListener('click', this.logout);
    }
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'login.html';
  }
}

customElements.define('header-component', Header);
