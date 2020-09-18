 // resources/assets/js/components/Header.js

 import React from 'react'
 import { Link } from 'react-router-dom'

 const NavBar = () => (
    <aside class="sidenav-main nav-expanded nav-lock nav-collapsible sidenav-dark sidenav-active-rounded">
        <div class="brand-sidebar">
            <h1 class="logo-wrapper">
            <a class="brand-logo darken-1" href="index.html"><img src="../../../app-assets/images/logo/materialize-logo.png" alt="materialize logo" /><span class="logo-text hide-on-med-and-down">Amassur</span></a><a class="navbar-toggler" href="#"><i class="material-icons">radio_button_checked</i></a></h1>
        </div>
        <ul class="sidenav sidenav-collapsible leftside-navigation collapsible sidenav-fixed menu-shadow" id="slide-out" data-menu="menu-navigation" data-collapsible="accordion">
            <li class="active bold"><a class=" waves-effect waves-cyan " href="dashboard-modern.html"><i class="material-icons">settings_input_svideo</i><span class="menu-title" data-i18n="">Dashboard</span></a>
            </li>

            <li class="navigation-header"><a class="navigation-header-text">Gestion des assurances</a><i class="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="app-email.html"><i class="material-icons">mail_outline</i><span class="menu-title" data-i18n="">Assurances</span><span class="badge new badge pill pink accent-2 float-right mr-10">5</span></a>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="app-chat.html"><i class="material-icons">chat_bubble_outline</i><span class="menu-title" data-i18n="">Nouvelle demandes<span class="badge new badge pill pink accent-2 float-right mr-10">3</span></span></a>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="app-contacts.html"><i class="material-icons">import_contacts</i><span class="menu-title" data-i18n="">En cours d'expiration</span></a>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="app-contacts.html"><i class="material-icons">import_contacts</i><span class="menu-title" data-i18n="">Assurances expirées</span></a>
            </li>
            <li class="navigation-header"><a class="navigation-header-text">Communications</a><i class="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="app-email.html"><i class="material-icons">mail_outline</i><span class="menu-title" data-i18n="">Mail</span><span class="badge new badge pill pink accent-2 float-right mr-10">5</span></a>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="app-chat.html"><i class="material-icons">chat_bubble_outline</i><span class="menu-title" data-i18n="">Chat<span class="badge new badge pill pink accent-2 float-right mr-10">3</span></span></a>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="app-contacts.html"><i class="material-icons">import_contacts</i><span class="menu-title" data-i18n="">Contacts</span></a>
            </li>
            <li class="navigation-header"><a class="navigation-header-text">Gestion de comptes </a><i class="navigation-header-icon material-icons">more_horiz</i>
            </li>

            <li class="bold"><a class=" waves-effect waves-cyan " href="#"><i class="material-icons">face</i><span class="menu-title" data-i18n="">Clients</span></a>
            </li>
            <li class="bold"><a class=" waves-effect waves-cyan " href="#"><i class="material-icons">face</i><span class="menu-title" data-i18n="">Administrateurs</span></a>
            </li>
            <li class="navigation-header"><a class="navigation-header-text">Aide </a><i class="navigation-header-icon material-icons">more_horiz</i>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="../https://pixinvent.com/materialize-material-design-admin-template/documentation/index.html"><i class="material-icons">import_contacts</i><span class="menu-title" data-i18n="">Documentation</span></a>
            </li>
            <li class="bold"><a class="waves-effect waves-cyan " href="https://pixinvent.ticksy.com/"><i class="material-icons">help_outline</i><span class="menu-title" data-i18n="">Support</span></a>
            </li>
        </ul>
        <div class="navigation-background"></div><a class="sidenav-trigger btn-sidenav-toggle btn-floating btn-medium waves-effect waves-light hide-on-large-only" href="#" data-target="slide-out"><i class="material-icons">menu</i></a>
    </aside>
 )

 export default NavBar

