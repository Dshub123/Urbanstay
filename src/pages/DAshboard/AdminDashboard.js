import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaThList, FaAddressBook, FaBed, FaChartPie } from "react-icons/fa";
import './dashboard.css'
export default function Dashboard() {
    const id = 1;
    // useState{id, setId}={};
    return (
        <>


            <div class="container-fluid display-table">
                <div class="row display-table-row">
                    <div class="col-md-2 col-sm-1 hidden-xs display-table-cell v-align box" id="navigation">
                        <div class="logo">

                        </div>
                        <div class="navi">
                            <ul>
                                <li class="active">
                                    <Link to={"/admin"}>
                                        <span class="hidden-xs hidden-sm">
                                            <FaChartPie className="icons mx-2" style={{ color: "white" }} size={20} />
                                            Dashboard
                                        </span>
                                    </Link>
                                </li>
                                <li class="">
                                    <Link to={`/owner/${id}/tenants`}>
                                        <span class="hidden-xs hidden-sm">
                                            <FaThList className="icons mx-2" style={{ color: "white" }} size={20} />
                                            Tenants
                                        </span>
                                    </Link>
                                </li>
                                <li class="">
                                    <Link to={`/owner/${id}/rooms`}>
                                        <span class="hidden-xs hidden-sm">
                                            <FaAddressBook className="icons mx-2" style={{ color: "white" }} size={20} />
                                            Rooms
                                        </span>
                                    </Link>
                                </li>
                                <li class="">
                                    <Link to={`/owner/${id}/bookings`}>
                                        <span class="hidden-xs hidden-sm">
                                            <FaBed className="icons mx-2" style={{ color: "white" }} size={20} />
                                            Bookings
                                        </span>
                                    </Link>
                                </li>

                            </ul>
                        </div>
                    </div>
                    <div class="col-md-10 col-sm-11 display-table-cell v-align">
                        <div class="row">
                            <header>
                                <div class="col-md-7">
                                    <div class="search hidden-xs hidden-sm">
                                        <input type="text" placeholder="Search" id="search" />
                                    </div>
                                </div>
                                <div class="col-md-5">
                                    <div class="header-rightside">
                                        <ul class="list-inline header-top pull-right">
                                            <li class="hidden-xs"><a href="#" class="add-project" data-toggle="modal" data-target="#add_project">Add Project</a></li>
                                            <li><a href="#"><i class="fa fa-envelope" aria-hidden="true"></i></a></li>
                                            <li>
                                                <a href="#" class="icon-info">
                                                    <i class="fa fa-bell" aria-hidden="true"></i>
                                                    <span class="label label-primary">3</span>
                                                </a>
                                            </li>
                                            <li class="dropdown">
                                                <b class="caret"></b>
                                                <ul class="dropdown-menu">
                                                    <li>
                                                        <div class="navbar-content">
                                                            <span>JS Krishna</span>
                                                            <p class="text-muted small">
                                                                me@jskrishna.com
                                                            </p>
                                                            <div class="divider">
                                                            </div>
                                                            <a href="#" class="view btn-sm active">View Profile</a>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                        </div>
                        <div class="user-dashboard">
                            <h1>Hello, JS</h1>
                            <div class="row">
                                <div class="col-md-5 col-sm-5 col-xs-12 gutter">

                                    <div class="sales">
                                        <h2>Your Sale</h2>

                                        <div class="btn-group">
                                            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>Period:</span> Last Year
                                            </button>
                                            <div class="dropdown-menu">
                                                <a href="#">2012</a>
                                                <a href="#">2014</a>
                                                <a href="#">2015</a>
                                                <a href="#">2016</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-7 col-sm-7 col-xs-12 gutter">

                                    <div class="sales report">
                                        <h2>Report</h2>
                                        <div class="btn-group">
                                            <button class="btn btn-secondary btn-lg dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span>Period:</span> Last Year
                                            </button>
                                            <div class="dropdown-menu">
                                                <a href="#">2012</a>
                                                <a href="#">2014</a>
                                                <a href="#">2015</a>
                                                <a href="#">2016</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>



            <div id="add_project" class="modal fade" role="dialog">
                <div class="modal-dialog">


                    <div class="modal-content">
                        <div class="modal-header login-header">
                            <button type="button" class="close" data-dismiss="modal">×</button>
                            <h4 class="modal-title">Add Project</h4>
                        </div>
                        <div class="modal-body">
                            <input type="text" placeholder="Project Title" name="name" />
                            <input type="text" placeholder="Post of Post" name="mail" />
                            <input type="text" placeholder="Author" name="passsword" />
                            <textarea placeholder="Desicrption"></textarea>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="cancel" data-dismiss="modal">Close</button>
                            <button type="button" class="add-project" data-dismiss="modal">Save</button>
                        </div>
                    </div>

                </div>
            </div>























        </>
    )
}
