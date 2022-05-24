import React from 'react'
import { FaSignOutAlt } from 'react-icons/fa'

function Navbar() {
    return (
        <div className='navbar'>
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><FaSignOutAlt /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item">
                                <a class="nav-link disabled" aria-current="page" href="/">Tasks</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="/">Board</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="/">Calendar</a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle disabled" href="/" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Settings
                                </a>
                                <ul class="dropdown-menu" >
                                    <li><a class="dropdown-item" href="/">Action</a></li>
                                    <li><a class="dropdown-item" href="/">Another action</a></li>
                                    <li><hr class="dropdown-divider"></hr></li>
                                    <li><a class="dropdown-item" href="/">Something else here</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar