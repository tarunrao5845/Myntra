import React from "react";

 function NavBar() {
  return (
    <>
      <nav id="navbar1">
        <ul className="ul">
          <li className="li">
            <div id="offcanvas">
              <button
                className="navbar-toggler navbar bg-light"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasExample"
                aria-controls="offcanvasExample"
              >
                <span className="navbar-toggler-icon "></span>
              </button>

              <div
                className="offcanvas offcanvas-start "
                tabIndex="-1"
                id="offcanvasExample"
                aria-labelledby="offcanvasExampleLabel"
              >
                <div className="offcanvas-header p-0">
                  <img
                    src="https://www.shopickr.com/wp-content/uploads/2018/07/myntra-clearance-sale-offers-banner.jpg"
                    width="250px"
                    height="150px"
                    alt=""
                  />
                </div>
                <div className="offcanvas-body">
                  <div>
                    <div className="flex-shrink-0  bg-white">
                      <ul className="list-unstyled ps-0 ">
                        <li>
                          <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-semibold "
                            data-bs-toggle="collapse"
                            data-bs-target="#home-collapse"
                            aria-expanded="true"
                          >
                            MEN
                          </button>
                          <div className="collapse p-3" id="home-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                              <li>
                                <button
                                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-normal "
                                  data-bs-toggle="collapse"
                                  data-bs-target="#topwear-collapse"
                                  aria-expanded="true"
                                >
                                  TopWear
                                </button>
                                <div
                                  className="collapse hide p-3"
                                  id="topwear-collapse"
                                >
                                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                    <li className="li">
                                      <a href="/">CasualTshirt </a>
                                    </li>
                                    <li className="li">
                                      <a href="/">T-Shirt </a>
                                    </li>
                                    <li className="li">
                                      <a href="/">FormalTshirt</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Sweatshits</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Sweaters</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Jackets</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Coats</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Mufler</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Rainjackets</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li>
                                <button
                                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-normal "
                                  data-bs-toggle="collapse"
                                  data-bs-target="#festive-collapse"
                                  aria-expanded="true"
                                >
                                  Indian & Festive Wear
                                </button>
                                <div
                                  className="collapse hide p-3"
                                  id="festive-collapse"
                                >
                                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                    <li className="li">
                                      <a href="/">Kurta</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Sherwani</a>
                                    </li>
                                    <li className="li">
                                      <a href="/"> Nehru Jacket</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Dhoti's</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li>
                                <button
                                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-normal "
                                  data-bs-toggle="collapse"
                                  data-bs-target="#bottom-collapse"
                                  aria-expanded="true"
                                >
                                  Bottom Wear
                                </button>
                                <div
                                  className="collapse hide p-3"
                                  id="bottom-collapse"
                                >
                                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                    <li className="li">
                                      <a href="/">Jeans</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">CasualTrouser</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">FormalTrouser</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Shorts</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">TrackPants</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li>
                                <button
                                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-normal "
                                  data-bs-toggle="collapse"
                                  data-bs-target="#footwear-collapse"
                                  aria-expanded="true"
                                >
                                  FootWear
                                </button>
                                <div
                                  className="collapse hide p-3"
                                  id="footwear-collapse"
                                >
                                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                    <li className="li">
                                      <a href="/">Casual Shoes</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Formal Shoes</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Sports Shoes</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Sneakers</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Sandals</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Highneck Shoes</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Loafer Shoes</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Flip Flops</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li>
                                <button
                                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-normal "
                                  data-bs-toggle="collapse"
                                  data-bs-target="#sports-collapse"
                                  aria-expanded="true"
                                >
                                  Sports Wear
                                </button>
                                <div
                                  className="collapse hide p-3"
                                  id="sports-collapse"
                                >
                                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                    <li className="li">
                                      <a href="/">SportsTshirt </a>
                                    </li>
                                    <li className="li">
                                      <a href="/">ActiveT-Shirt </a>
                                    </li>
                                    <li className="li">
                                      <a href="/">SportPants</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Jackets</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Track Suits</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Sports Accessories</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Swim Wear</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li>
                                <button
                                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-normal "
                                  data-bs-toggle="collapse"
                                  data-bs-target="#gadgets-collapse"
                                  aria-expanded="true"
                                >
                                  Gadgets
                                </button>
                                <div
                                  className="collapse hide p-3"
                                  id="gadgets-collapse"
                                >
                                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                    <li className="li">
                                      <a href="/">Headphones</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Speakers</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">SmartWatch</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">FItnessGadgets</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>

                              <li>
                                <button
                                  className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-normal "
                                  data-bs-toggle="collapse"
                                  data-bs-target="#fashion-collapse"
                                  aria-expanded="true"
                                >
                                  Fashion Wear
                                </button>
                                <div
                                  className="collapse hide p-3"
                                  id="fashion-collapse"
                                >
                                  <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 large">
                                    <li className="li">
                                      <a href="/">Wallets</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Belts</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Perfume</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Trimmers</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Deodrants</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Ties</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Gifts</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Mufler</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Phone Case</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Helmets</a>
                                    </li>
                                    <li className="li">
                                      <a href="/">Rings</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              </ul>
                          </div>
                        </li>

                              {/*                                   here womens wear start                            */}




                        
                        <li className="mb-1">
                          <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-semibold"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="false"
                          >
                            Dashboard
                          </button>
                          <div className="collapse p-3" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Weekly
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Monthly
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Annually
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
























                        <li className="mb-1">
                          <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-semibold"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="false"
                          >
                            Dashboard
                          </button>
                          <div className="collapse p-3" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Weekly
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Monthly
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Annually
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="mb-1">
                          <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed fw-semibold"
                            data-bs-toggle="collapse"
                            data-bs-target="#dashboard-collapse"
                            aria-expanded="false"
                          >
                            Dashboard
                          </button>
                          <div className="collapse p-3" id="dashboard-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Overview
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Weekly
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Monthly
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Annually
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="mb-1">
                          <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed  fw-semibold"
                            data-bs-toggle="collapse"
                            data-bs-target="#orders-collapse"
                            aria-expanded="false"
                          >
                            Orders
                          </button>
                          <div className="collapse p-3" id="orders-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  New
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Processed
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Shipped
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Returned
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="border-top my-3"></li>
                        <li className="mb-1">
                          <button
                            className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed  fw-semibold"
                            data-bs-toggle="collapse"
                            data-bs-target="#account-collapse"
                            aria-expanded="false"
                          >
                            Account
                          </button>
                          <div className="collapse p-3" id="account-collapse">
                            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  New...
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Profile
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Settings
                                </a>
                              </li>
                              <li>
                                <a
                                  href="/"
                                  className="link-dark d-inline-flex text-decoration-none rounded"
                                >
                                  Sign out
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="li">
            <img
              className="logoimg"
              src="https://cdn.mos.cms.futurecdn.net/Ziv82j6YvdrvHqmxYjiTo3.png"
              alt=""
            />
          </li>
          <li className="li">
            <span className="dropdown">
              <a className="a1" href="/">
                MEN
              </a>
              <span className="dropdown-content">
                <ul className="ul">
                  <div className="dropdownitems">
                    <h6 className="h6-1">TopWear</h6>
                    <li className="li">
                      <a href="/">CasualTshirt </a>
                    </li>
                    <li className="li">
                      <a href="/">T-Shirt </a>
                    </li>
                    <li className="li">
                      <a href="/">FormalTshirt</a>
                    </li>
                    <li className="li">
                      <a href="/">Sweatshits</a>
                    </li>
                    <li className="li">
                      <a href="/">Sweaters</a>
                    </li>
                    <li className="li">
                      <a href="/">Jackets</a>
                    </li>
                    <li className="li">
                      <a href="/">Coats</a>
                    </li>
                    <li className="li">
                      <a href="/">Mufler</a>
                    </li>
                    <li className="li">
                      <a href="/">Rainjackets</a>
                    </li>
                    <hr />

                    <h6 className="h6-1">Indian&FestiveWear</h6>
                    <li className="li">
                      <a href="/">Kurta</a>
                    </li>
                    <li className="li">
                      <a href="/">Sherwani</a>
                    </li>
                    <li className="li">
                      <a href="/"> Nehru Jacket</a>
                    </li>
                    <li className="li">
                      <a href="/">Dhoti's</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-1">BottomWear</h6>
                    <li className="li">
                      <a href="/">Jeans</a>
                    </li>
                    <li className="li">
                      <a href="/">CasualTrouser</a>
                    </li>
                    <li className="li">
                      <a href="/">FormalTrouser</a>
                    </li>
                    <li className="li">
                      <a href="/">Shorts</a>
                    </li>
                    <li className="li">
                      <a href="/">TrackPants</a>
                    </li>
                    <hr />
                    <h6 className="h6-1">InnerWear</h6>
                    <li className="li">
                      <a href="/">Trunks</a>
                    </li>
                    <li className="li">
                      <a href="/">Boxer</a>
                    </li>
                    <li className="li">
                      <a href="/">Vests</a>
                    </li>
                    <li className="li">
                      <a href="/">Thermals</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-1">FootWear</h6>
                    <li className="li">
                      <a href="/">Casual Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Formal Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Sports Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Sneakers</a>
                    </li>
                    <li className="li">
                      <a href="/">Sandals</a>
                    </li>
                    <li className="li">
                      <a href="/">Highneck Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Loafer Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Flip Flops</a>
                    </li>
                    <hr />

                    <h6 className="h6-1">Gadgets</h6>
                    <li className="li">
                      <a href="/">Headphones</a>
                    </li>
                    <li className="li">
                      <a href="/">Speakers</a>
                    </li>
                    <li className="li">
                      <a href="/">SmartWatch</a>
                    </li>
                    <li className="li">
                      <a href="/">FItnessGadgets</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-1">Sports&ActiveWear</h6>
                    <li className="li">
                      <a href="/">SportsTshirt </a>
                    </li>
                    <li className="li">
                      <a href="/">ActiveT-Shirt </a>
                    </li>
                    <li className="li">
                      <a href="/">SportPants</a>
                    </li>
                    <li className="li">
                      <a href="/">Jackets</a>
                    </li>
                    <li className="li">
                      <a href="/">Track Suits</a>
                    </li>
                    <li className="li">
                      <a href="/">Sports Accessories</a>
                    </li>
                    <li className="li">
                      <a href="/">Swim Wear</a>
                    </li>
                    <hr />

                    <h6 className="h6-1">
                      <span> PersonalCare&Grooming</span>
                    </h6>
                    <h6 className="h6-1">Sunglasses & Frames</h6>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-1">Fashion.Accessories</h6>
                    <li className="li">
                      <a href="/">Wallets</a>
                    </li>
                    <li className="li">
                      <a href="/">Belts</a>
                    </li>
                    <li className="li">
                      <a href="/">Perfume</a>
                    </li>
                    <li className="li">
                      <a href="/">Trimmers</a>
                    </li>
                    <li className="li">
                      <a href="/">Deodrants</a>
                    </li>
                    <li className="li">
                      <a href="/">Ties</a>
                    </li>
                    <li className="li">
                      <a href="/">Gifts</a>
                    </li>
                    <li className="li">
                      <a href="/">Mufler</a>
                    </li>
                    <li className="li">
                      <a href="/">Phone Case</a>
                    </li>
                    <li className="li">
                      <a href="/">Helmets</a>
                    </li>
                    <li className="li">
                      <a href="/">Rings</a>
                    </li>
                    <hr />
                    <h6 className="h6-1">BackbagPacks</h6>
                    <h6 className="h6-1">Luggages</h6>
                  </div>
                </ul>
              </span>
            </span>
          </li>

          {/*                                                here is women dropdown                                                         */}
          <li className="li">
            <span className="dropdown">
              <a className="a1" href="/">
                WOMEN
              </a>
              <span className="dropdown-content">
                <ul className="ul">
                  <div className="dropdownitems">
                    <h6 className="h6-2">Indian&FusionWear</h6>
                    <li className="li">
                      <a href="/">Kurta&Suits</a>
                    </li>
                    <li className="li">
                      <a href="/">Tunics&Top's</a>
                    </li>
                    <li className="li">
                      <a href="/">Sarees</a>
                    </li>
                    <li className="li">
                      <a href="/">EthenicsWear</a>
                    </li>
                    <li className="li">
                      <a href="/">Leggings</a>
                    </li>
                    <li className="li">
                      <a href="/">Skirts&Plazoos</a>
                    </li>
                    <li className="li">
                      <a href="/">DressMaterial</a>
                    </li>
                    <li className="li">
                      <a href="/">LehngaCholi</a>
                    </li>
                    <li className="li">
                      <a href="/">Duppata&Shalws</a>
                    </li>
                    <li className="li">
                      <a href="/">Jackets</a>
                    </li>
                    <hr />

                    <h6 className="h6-2 mb-3">Belts,Scraves&More</h6>
                    <h6 className="h6-2">Watches&wearables</h6>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-2 mb-3">WesternWear</h6>
                    <li className="li">
                      <a href="/">Dresses</a>
                    </li>
                    <li className="li">
                      <a href="/">Tops</a>
                    </li>
                    <li className="li">
                      <a href="/">T-Shirts</a>
                    </li>
                    <li className="li">
                      <a href="/">Jeans</a>
                    </li>
                    <li className="li">
                      <a href="/">Shorts&Capris</a>
                    </li>
                    <li className="li">
                      <a href="/">JumpSuits</a>
                    </li>
                    <li className="li">
                      <a href="/">PlaySuits</a>
                    </li>
                    <li className="li">
                      <a href="/">Shrugs</a>
                    </li>
                    <li className="li">
                      <a href="/">Sweaters</a>
                    </li>
                    <li className="li">
                      <a href="/">Blazer&Jackets</a>
                    </li>
                    <li className="li">
                      <a href="/">WaistCoats</a>
                    </li>

                    <hr />
                    <h6 className="h6-2">Plus Size</h6>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-2 mb-3">Maternity</h6>
                    <h6 className="h6-2 mb-3">Sunglasses</h6>
                    <h6 className="h6-2">FootWear</h6>
                    <li className="li">
                      <a href="/">Casual Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Heels</a>
                    </li>
                    <li className="li">
                      <a href="/">Sandals</a>
                    </li>
                    <li className="li">
                      <a href="/">Highneck Shoes</a>
                    </li>
                    <hr />

                    <h6 className="h6-2">Gadgets</h6>
                    <li className="li">
                      <a href="/">Headphones</a>
                    </li>
                    <li className="li">
                      <a href="/">Speakers</a>
                    </li>
                    <li className="li">
                      <a href="/">SmartWatch</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-2">Lingerie&sleepWear</h6>
                    <li className="li">
                      <a href="/">Bra</a>
                    </li>
                    <li className="li">
                      <a href="/">Breifs </a>
                    </li>
                    <li className="li">
                      <a href="/">Sleepwear</a>
                    </li>
                    <li className="li">
                      <a href="/">TShapeWears</a>
                    </li>
                    <li className="li">
                      <a href="/">Thermals</a>
                    </li>
                    <hr />

                    <h6 className="h6-2">
                      <span> PersonalCare&Grooming</span>
                    </h6>
                    <h6 className="h6-2">Sunglasses&Frames</h6>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-2">Fashion.Accessories</h6>
                    <li className="li">
                      <a href="/">Wallets</a>
                    </li>
                    <li className="li">
                      <a href="/">Belts</a>
                    </li>
                    <li className="li">
                      <a href="/">Perfume</a>
                    </li>
                    <li className="li">
                      <a href="/">Trimmers</a>
                    </li>
                    <li className="li">
                      <a href="/">Deodrants</a>
                    </li>
                    <li className="li">
                      <a href="/">Ties</a>
                    </li>
                    <li className="li">
                      <a href="/">Gifts</a>
                    </li>
                    <li className="li">
                      <a href="/">Mufler</a>
                    </li>
                    <li className="li">
                      <a href="/">Phone Case</a>
                    </li>
                    <li className="li">
                      <a href="/">Helmets</a>
                    </li>
                    <li className="li">
                      <a href="/">Rings</a>
                    </li>
                  </div>
                </ul>
              </span>
            </span>
          </li>

          {/*                                      here our kids wear starts                                    */}
          <li className="li">
            <span className="dropdown">
              <a className="a1" href="/">
                KIDS
              </a>
              <span className="dropdown-content">
                <ul className="ul">
                  <div className="dropdownitems">
                    <h6 className="h6-3">BoysClothing</h6>
                    <li className="li">
                      <a href="/">CasualTshirt </a>
                    </li>
                    <li className="li">
                      <a href="/">T-Shirt </a>
                    </li>
                    <li className="li">
                      <a href="/">Sweatshits</a>
                    </li>
                    <li className="li">
                      <a href="/">Sweaters</a>
                    </li>
                    <li className="li">
                      <a href="/">Jackets</a>
                    </li>
                    <li className="li">
                      <a href="/">Coats</a>
                    </li>
                    <li className="li">
                      <a href="/">Mufler</a>
                    </li>
                    <li className="li">
                      <a href="/">Rainjackets</a>
                    </li>
                    <li className="li">
                      <a href="/">Kurta</a>
                    </li>
                    <li className="li">
                      <a href="/">Jeans</a>
                    </li>
                    <li className="li">
                      <a href="/">Casual Trouser</a>
                    </li>
                    <li className="li">
                      <a href="/">Shorts</a>
                    </li>
                    <li className="li">
                      <a href="/">TrackPants</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-3">GirlsClothing</h6>
                    <li className="li">
                      <a href="/">Kurta&Suits</a>
                    </li>
                    <li className="li">
                      <a href="/">EthenicsWear</a>
                    </li>
                    <li className="li">
                      <a href="/">Leggings</a>
                    </li>
                    <li className="li">
                      <a href="/">Skirts&Plazoos</a>
                    </li>
                    <li className="li">
                      <a href="/">DressMaterial</a>
                    </li>
                    <li className="li">
                      <a href="/">LehngaCholi</a>
                    </li>
                    <li className="li">
                      <a href="/">Jackets</a>
                    </li>
                    <li className="li">
                      <a href="/">Tops</a>
                    </li>
                    <li className="li">
                      <a href="/">T-Shirts</a>
                    </li>
                    <li className="li">
                      <a href="/">Jeans</a>
                    </li>
                    <li className="li">
                      <a href="/">Shorts&Capris</a>
                    </li>
                    <li className="li">
                      <a href="/">JumpSuits</a>
                    </li>
                    <li className="li">
                      <a href="/">PlaySuits</a>
                    </li>
                    <li className="li">
                      <a href="/">Sweaters</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-3">FootWear</h6>
                    <li className="li">
                      <a href="/">Casual Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Heels</a>
                    </li>
                    <li className="li">
                      <a href="/">Sandals</a>
                    </li>
                    <li className="li">
                      <a href="/">Highneck Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Formal Shoes</a>
                    </li>
                    <li className="li">
                      <a href="/">Sports Shoes</a>
                    </li>
                    <hr />

                    <h6 className="h6-3">Toys</h6>
                    <li className="li">
                      <a href="/">Learning&Development</a>
                    </li>
                    <li className="li">
                      <a href="/">SoftToys</a>
                    </li>
                    <li className="li">
                      <a href="/">ActivityToys</a>
                    </li>
                    <li className="li">
                      <a href="/">HardToys</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-3">Infants</h6>
                    <li className="li">
                      <a href="/">WinterWear</a>
                    </li>
                    <li className="li">
                      <a href="/">SummerWear</a>
                    </li>
                    <li className="li">
                      <a href="/">Sleepwear</a>
                    </li>
                    <li className="li">
                      <a href="/">Tops&t-Shirts</a>
                    </li>
                    <li className="li">
                      <a href="/">Thermals</a>
                    </li>
                    <hr />
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-3">Accessories</h6>
                    <li className="li">
                      <a href="/">Wallets</a>
                    </li>
                    <li className="li">
                      <a href="/">Belts</a>
                    </li>
                    <li className="li">
                      <a href="/">Deodrants</a>
                    </li>
                    <li className="li">
                      <a href="/">Ties</a>
                    </li>
                    <li className="li">
                      <a href="/">Caps&Hats</a>
                    </li>
                    <li className="li">
                      <a href="/">Sunglasses</a>
                    </li>
                    <li className="li">
                      <a href="/">Watches</a>
                    </li>
                  </div>
                </ul>
              </span>
            </span>
          </li>

          {/*                                                 here our home and living starts                                                        */}

          <li className="li">
            <span className="dropdown">
              <a id="home" className="a1" href="/">
                HOME & LIVING
              </a>
              <span className="dropdown-content">
                <ul className="ul">
                  <div className="dropdownitems">
                    <h6 className="h6-4">Bed&Furnishing</h6>
                    <li className="li">
                      <a href="/">BedRunners</a>
                    </li>
                    <li className="li">
                      <a href="/">MattressProtectors</a>
                    </li>
                    <li className="li">
                      <a href="/">Bedsheets</a>
                    </li>
                    <li className="li">
                      <a href="/">BeddingSets</a>
                    </li>
                    <li className="li">
                      <a href="/">Blankets</a>
                    </li>
                    <li className="li">
                      <a href="/">Pillows</a>
                    </li>
                    <li className="li">
                      <a href="/">BedCovers</a>
                    </li>
                    <li className="li">
                      <a href="/">DiwanSets</a>
                    </li>
                    <li className="li">
                      <a href="/">ChairPads</a>
                    </li>
                    <li className="li">
                      <a href="/">SofaCovers</a>
                    </li>
                    <hr />
                    <h6 className="h6-4">Flooring</h6>
                    <li className="li">
                      <a href="/">FloorRunners</a>
                    </li>
                    <li className="li">
                      <a href="/">Carpets</a>
                    </li>
                    <li className="li">
                      <a href="/">FloorMata</a>
                    </li>
                    <li className="li">
                      <a href="/">DoorMats</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-4">Bath</h6>
                    <li className="li">
                      <a href="/">BathTowels</a>
                    </li>
                    <li className="li">
                      <a href="/">FaceTowels</a>
                    </li>
                    <li className="li">
                      <a href="/">BeachTowels</a>
                    </li>
                    <li className="li">
                      <a href="/">TowelSet</a>
                    </li>
                    <li className="li">
                      <a href="/">BathRugs</a>
                    </li>
                    <li className="li">
                      <a href="/">BathRobes</a>
                    </li>
                    <li className="li">
                      <a href="/">ShowerCurtains</a>
                    </li>
                    <li className="li">
                      <a href="/">BathroomAcc.</a>
                    </li>
                    <hr />
                    <h6 className="h6-4">Lamps&Lightning</h6>
                    <li className="li">
                      <a href="/">FloorLamps</a>
                    </li>
                    <li className="li">
                      <a href="/">CelingLamps</a>
                    </li>
                    <li className="li">
                      <a href="/">TableLamps</a>
                    </li>
                    <li className="li">
                      <a href="/">WallLamps</a>
                    </li>
                    <li className="li">
                      <a href="/">OutdoorLamps</a>
                    </li>
                    <li className="li">
                      <a href="/">StreetLights</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-4">HomeDecor</h6>
                    <li className="li">
                      <a href="/">Plants&Planters</a>
                    </li>
                    <li className="li">
                      <a href="/">Aroma's&Candles</a>
                    </li>
                    <li className="li">
                      <a href="/">Clocks</a>
                    </li>
                    <li className="li">
                      <a href="/">Mirrors</a>
                    </li>
                    <li className="li">
                      <a href="/">WallDecor</a>
                    </li>
                    <li className="li">
                      <a href="/">FestiveDecor</a>
                    </li>
                    <li className="li">
                      <a href="/">WallShelves</a>
                    </li>
                    <li className="li">
                      <a href="/">Fountains</a>
                    </li>
                    <li className="li">
                      <a href="/">Ottomans</a>
                    </li>
                    <li className="li">
                      <a href="/">Showpieces</a>
                    </li>
                    <hr />

                    <h6 className="h6-4 mb-3">CushionCover</h6>
                    <h6 className="h6-4 mb-3">Curtains</h6>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-4">Kitchen&Table</h6>
                    <li className="li">
                      <a href="/">TableRunners </a>
                    </li>
                    <li className="li">
                      <a href="/">Dinnerwares </a>
                    </li>
                    <li className="li">
                      <a href="/">Cups&Mugs</a>
                    </li>
                    <li className="li">
                      <a href="/">Bakeware&Cookware</a>
                    </li>
                    <li className="li">
                      <a href="/">KitchenTools</a>
                    </li>
                    <li className="li">
                      <a href="/">Bar&Drinkware</a>
                    </li>
                    <li className="li">
                      <a href="/">TableCovers</a>
                    </li>
                    <hr />
                    <h6 className="h6-4">Storage</h6>
                    <li className="li">
                      <a href="/">Bins </a>
                    </li>
                    <li className="li">
                      <a href="/">Hangers </a>
                    </li>
                    <li className="li">
                      <a href="/">Organisers</a>
                    </li>
                    <li className="li">
                      <a href="/">Hooks&Holders</a>
                    </li>
                    <li className="li">
                      <a href="/">LaundryBags</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-4">Brands</h6>
                    <li className="li">
                      <a href="/">H&M</a>
                    </li>
                    <li className="li">
                      <a href="/">Mark&Spencer</a>
                    </li>
                    <li className="li">
                      <a href="/">HomeCenter</a>
                    </li>
                    <li className="li">
                      <a href="/">Spaces</a>
                    </li>
                    <li className="li">
                      <a href="/">DDcore</a>
                    </li>
                    <li className="li">
                      <a href="/">Story@Home</a>
                    </li>
                    <li className="li">
                      <a href="/">PureHome&Living</a>
                    </li>
                    <li className="li">
                      <a href="/">Swayam</a>
                    </li>
                    <li className="li">
                      <a href="/">RaymondHome</a>
                    </li>
                    <li className="li">
                      <a href="/">Maspar</a>
                    </li>
                    <li className="li">
                      <a href="/">Trident</a>
                    </li>
                    <li className="li">
                      <a href="/">Cortina</a>
                    </li>
                    <li className="li">
                      <a href="/">Random</a>
                    </li>
                    <li className="li">
                      <a href="/">ROMEE</a>
                    </li>
                    <li className="li">
                      <a href="/">Ellementry</a>
                    </li>
                    <li className="li">
                      <a href="/">SEJbyNishaGupta</a>
                    </li>
                    <li className="li">
                      <a href="/">Trident</a>
                    </li>
                  </div>
                </ul>
              </span>
            </span>
          </li>

          {/*                                                         here our beauty starts                                                    */}

          <li className="li">
            <span className="dropdown">
              <a className="a1" id="beauty" href="/">
                BEAUTY
              </a>
              <span className="dropdown-content">
                <ul className="ul">
                  <div className="dropdownitems">
                    <h6 className="h6-5">MakeUp</h6>
                    <li className="li">
                      <a href="/">LipsStick</a>
                    </li>
                    <li className="li">
                      <a href="/">LipGloss</a>
                    </li>
                    <li className="li">
                      <a href="/">LipLiner</a>
                    </li>
                    <li className="li">
                      <a href="/">Mascara</a>
                    </li>
                    <li className="li">
                      <a href="/">EyeLiner</a>
                    </li>
                    <li className="li">
                      <a href="/">Kajal</a>
                    </li>
                    <li className="li">
                      <a href="/">EyeShadow</a>
                    </li>
                    <li className="li">
                      <a href="/">Foundation</a>
                    </li>
                    <li className="li">
                      <a href="/">Primer</a>
                    </li>
                    <li className="li">
                      <a href="/">Concealer</a>
                    </li>
                    <li className="li">
                      <a href="/">Compact</a>
                    </li>
                    <li className="li">
                      <a href="/">NailPolish</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-5">Skin,Bath&Body</h6>
                    <li className="li">
                      <a href="/">FaceMoisturiser</a>
                    </li>
                    <li className="li">
                      <a href="/">cleanser</a>
                    </li>
                    <li className="li">
                      <a href="/">Mask&peel</a>
                    </li>
                    <li className="li">
                      <a href="/">SunScreen</a>
                    </li>
                    <li className="li">
                      <a href="/">Serum</a>
                    </li>
                    <li className="li">
                      <a href="/">FaceWash</a>
                    </li>
                    <li className="li">
                      <a href="/">EyeCream</a>
                    </li>
                    <li className="li">
                      <a href="/">LipBalm</a>
                    </li>
                    <li className="li">
                      <a href="/">BodyLotion</a>
                    </li>
                    <li className="li">
                      <a href="/">BodyWash</a>
                    </li>
                    <li className="li">
                      <a href="/">BodyScrub</a>
                    </li>
                    <li className="li">
                      <a href="/">HandCream</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-5">HairCare</h6>
                    <li className="li">
                      <a href="/">Shampoo</a>
                    </li>
                    <li className="li">
                      <a href="/">Conditioner</a>
                    </li>
                    <li className="li">
                      <a href="/">HairCream</a>
                    </li>
                    <li className="li">
                      <a href="/">HairOil</a>
                    </li>
                    <li className="li">
                      <a href="/">HairGel</a>
                    </li>
                    <li className="li">
                      <a href="/">HairColor</a>
                    </li>
                    <li className="li">
                      <a href="/">HairAccessoryr</a>
                    </li>
                    <hr />

                    <h6 className="h6-5">Fragnance</h6>
                    <li className="li">
                      <a href="/">Perfume</a>
                    </li>
                    <li className="li">
                      <a href="/">Deodrants</a>
                    </li>
                    <li className="li">
                      <a href="/">BodyMist</a>
                    </li>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-5">Appliances</h6>
                    <li className="li">
                      <a href="/">HairStraightener</a>
                    </li>
                    <li className="li">
                      <a href="/">HairDryer</a>
                    </li>
                    <li className="li">
                      <a href="/">Epilator</a>
                    </li>
                    <hr className="mb-4" />
                    <h6 className="h6-5">Men'sGrooming</h6>
                    <li className="li">
                      <a href="/">Trimmers</a>
                    </li>
                    <li className="li">
                      <a href="/">HairDryer</a>
                    </li>
                    <li className="li">
                      <a href="/">BeardOil</a>
                    </li>
                    <hr className="mb-3" />

                    <h6 className="h6-5 mb-3">
                      <span>PremiumBeauty</span>
                    </h6>
                    <h6 className="h6-5">Wellness&Hygiene</h6>
                  </div>
                  <div className="dropdownitems">
                    <h6 className="h6-5">TopBrands</h6>
                    <li className="li">
                      <a href="/">Lakme</a>
                    </li>
                    <li className="li">
                      <a href="/">Maybelline</a>
                    </li>
                    <li className="li">
                      <a href="/">LOreal</a>
                    </li>
                    <li className="li">
                      <a href="/">Philips</a>
                    </li>
                    <li className="li">
                      <a href="/">BodyWorks</a>
                    </li>
                    <li className="li">
                      <a href="/">Botique</a>
                    </li>
                    <li className="li">
                      <a href="/">MamaEarth</a>
                    </li>
                    <li className="li">
                      <a href="/">MCaffiene</a>
                    </li>
                    <li className="li">
                      <a href="/">Nieva</a>
                    </li>
                    <li className="li">
                      <a href="/">Lotus</a>
                    </li>
                    <li className="li">
                      <a href="/">M A C</a>
                    </li>
                  </div>
                </ul>
              </span>
            </span>
          </li>

          <li className="li" id="studio">
            <span className="dropdown">
              {" "}
              <a id="studio" className="a1" href="/">
                STUDIO
              </a>
              <span className="dropdown-content">
                <div className="studio">
                  <div className="line">
                    <img
                      className="studiologo"
                      src="https://cdn-icons-png.flaticon.com/512/40/40217.png"
                      alt=""
                    />
                    <h1 className="studiofont">studio</h1>
                  </div>
                  <p>Your daily inspiration for everything fashion</p>
                  <img
                    className="studioimg"
                    src="https://media.istockphoto.com/photos/professional-fashion-shoot-picture-id883100408?k=20&m=883100408&s=612x612&w=0&h=nNyi4Uso_APax94zq88NYeIeN42mXO1JuQawDlFK3Ko="
                    alt=""
                  />
                  <button className="expbtn">EXPLORE STUDIO</button>
                </div>
              </span>
            </span>
          </li>

          <li className="li">
            <input
              className="input"
              placeholder="Search for Products ,Brands and More"
              results="0"
            />
            <button type="submit" className="search-button">
              <img
                src="https://www.kindacode.com/wp-content/uploads/2020/12/search.png?ezimgfmt=ng:webp/ngcb5"
                alt=""
              />
            </button>
          </li>
          <li className="li">
            <div className="li3">
              <li>
                <img
                  className="img3"
                  src="https://cdn-icons-png.flaticon.com/128/709/709579.png"
                  alt=""
                />
              </li>
              <li className="li">
                {" "}
                <span className="dropdown">
                  <a href="/" className="a1">
                    Profile
                  </a>
                  <span className="dropdown-content">
                    <div className="profile">
                      <h6>WELCOME</h6>
                      <p>To access account and manage orders</p>
                      <button className="btn btn-light my-1 mx-5 text-danger">
                        LOGIN/SIGNUP
                      </button>
                      <hr />
                      <li className="li">
                        <a href="/">Orders</a>
                      </li>
                      <li className="li">
                        <a href="/">Wishlist</a>
                      </li>
                      <li className="li">
                        <a href="/">GiftCards</a>
                      </li>
                      <li className="li">
                        <a href="/">Contact US</a>
                      </li>
                      <li className="li">
                        <a href="/">MyntraInsider</a>
                      </li>
                      <hr />
                      <li className="li">
                        <a href="/">MyntraCredits</a>
                      </li>
                      <li className="li">
                        <a href="/">Coupans</a>
                      </li>
                      <li className="li">
                        <a href="/">SavedCards</a>
                      </li>
                      <li className="li">
                        <a href="/">Saved VPA</a>
                      </li>
                      <li className="li">
                        <a href="/">Saved Addresses</a>
                      </li>
                    </div>
                  </span>
                </span>
              </li>
            </div>
          </li>
          <li className="li">
            <div className="li3">
              <li>
                <img
                  className="img3"
                  src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"
                  alt=""
                />
              </li>
              <li className="li">
                <a href="/" className="a1" id="wishlist">
                  Wishlist
                </a>
              </li>
            </div>
          </li>
          <li className="li">
            <div className="li3">
              <li>
                <img
                  className="img3"
                  src="https://cdn-icons-png.flaticon.com/512/1656/1656850.png"
                  alt=""
                />
              </li>
              <li className="li">
                <a href="/" className="a1" id="bag">
                  Bag
                </a>
              </li>
            </div>
          </li>
        </ul>
      </nav>
    </>
  );
}
export default NavBar