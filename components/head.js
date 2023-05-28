export default function headerComponent(){
    return`
    <div class="heading">
    <nav class="navbar navbar-expand-lg">
        <div class="collapse navbar-collapse" id="navbarNav">
            <h5>
                Seventh-day Adventist Church <br> PromiseLand
            </h5>
            <ul>
                <li class="nav-item active">
                    <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>
                <i class="bi bi-moon" id="toggleDark"></i>
            </ul>
        </div>
    </nav>
    <h1 class="head_summary">Welcome to Promise-land <br>Seventh-day Adventist Platform</h1>
</div>
   
    `
}