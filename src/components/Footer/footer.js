import React from "react"
import styled from "styled-components"
import socialIcons from "../../constants/social-icons"
import logoIcon from './img/fs-logo-side.png'
const Footer = () => {
  return (
    <FooterWrapper>
      <div className="social-icons">
      {socialIcons.map((item, index) => {
        return (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="sr-only">{item.name}</span>
            {item.icon}
          </a>
        )
      })}
      </div>
      <div className="footer-links">
        <img src={logoIcon} alt="Forms+Surfaces" className="logo" />
        <div>
          <div id="community_links">
          	<p>Join our mailing list to receive the latest news and updates from F+S.</p>
          </div>
          <div id="mc_embed_signup">
          	<form action="//forms-surfaces.us1.list-manage.com/subscribe/post?u=deed5374c301844ccef9b55ac&amp;id=44315d1845" class="validate" id="mc-embedded-subscribe-form" method="post" name="mc-embedded-subscribe-form" novalidate="" target="_blank">
          		<div id="mc_embed_signup_scroll">
          			<input class="email" id="mce-EMAIL" name="EMAIL" placeholder="email address" required="" type="email" />
          			<div aria-hidden="true" style={{position: 'absolute', left: '-50000px'}}>
          				<input name="b_deed5374c301844ccef9b55ac_3e2c17d270" tabindex="-1" type="text" value="" />
          				<input type="checkbox" value="2" name="group[21][2]" id="mce-group[21]-21-0" checked="checked" />
          				<input type="checkbox" value="1" name="group[21][1]" id="mce-group[21]-21-1" checked="checked" />
          			</div>
          			<div class="clear">
          				<input class="button" id="mc-embedded-subscribe" name="subscribe" type="submit" value="Subscribe" />
                </div>
          		</div>
          	</form>
          </div>
        </div>

        <div>
          <h2 class="title">Links</h2>
          <div class="menu-block- menu-name-secondary-links parent-mlid-37235 menu-level-1">
            <ul class="menu">
            <li class="leaf first last menu-mlid-97981">
            <a href="https://www.forms-surfaces.com/continuing-education">Continuing Education</a>
            </li>
            </ul>
          </div>
        </div>

        <div>
          <h2 class="title">Design Tools</h2>
          <div class="menu-block- menu-name-secondary-links parent-mlid-68382 menu-level-1">
            <ul class="menu">
            <li class="leaf first menu-mlid-116712">
            <a href="https://www.forms-surfaces.com/vektr-digital-canvas" target="_blank">VEKTR Digital Canvas</a></li>
            <li class="leaf menu-mlid-68383">
            <a href="https://www.forms-surfaces.com/augmented-reality">Augmented Reality</a></li>
            <li class="leaf menu-mlid-68385">
            <a href="https://www.forms-surfaces.com/elevator-design-studio">Elevator Design Studio</a></li>
            <li class="leaf menu-mlid-91318">
            <a href="https://www.forms-surfaces.com/zoom-digital-darkroom">Zoom Digital Darkroom</a></li>
            <li class="leaf last menu-mlid-68386">
            <a href="https://www.forms-surfaces.com/virtual-quarry">Virtual Quarry</a></li>
            </ul>
          </div>
        </div>

        <div>
          <h2 class="title">Company</h2>
          <div class="menu-block- menu-name-secondary-links parent-mlid-37241 menu-level-0">
          <ul class="menu">
          <li class="leaf first menu-mlid-37242">
          <a href="https://www.forms-surfaces.com/about-us">About Us</a></li>
          <li class="leaf menu-mlid-79389 has-children">
          <a href="https://www.forms-surfaces.com/projects">Projects</a></li>
          <li class="leaf menu-mlid-37243">
          <a href="https://www.forms-surfaces.com/news">News</a></li>
          <li class="leaf menu-mlid-45636 has-children">
          <a href="https://www.forms-surfaces.com/environmental-sustainability" title="Environmental Sustainability">Environmental Sustainability</a></li>
          <li class="leaf menu-mlid-45635">
          <a href="https://www.forms-surfaces.com/design-studio" title="Designers">Designers</a></li>
          <li class="leaf last menu-mlid-45629 has-children">
          <a href="https://www.forms-surfaces.com/careers" title="Careers">Careers</a></li>
          </ul></div>
        </div>

        <div>


        <h2 class="title">Contact</h2>
        <div class="menu-block- menu-name-secondary-links parent-mlid-37247 menu-level-1">
          <ul class="menu">
            <li class="leaf first menu-mlid-79379">
            <a href="https://www.forms-surfaces.com/contact/general-inquiries" title="Contact Us">General Inquiries</a></li>
            <li class="leaf menu-mlid-46061">
            <a href="https://www.forms-surfaces.com/txmas-contract" title="TXMAS Contract" class="hidden">TXMAS Contract</a></li>
            <li class="leaf menu-mlid-37249">
            <a href="https://www.forms-surfaces.com/locations">Locations</a></li>
            <li class="leaf last menu-mlid-37238 has-children">
            <a href="https://www.forms-surfaces.com/cornelius-signage">Cornelius Signage</a></li>
          </ul>
        </div>

        </div>

      </div>
      <div className="footer-lower">
        <div class="footer-inner">
          <a href="https://www.forms-surfaces.com/terms-use">Terms of Use</a>
          &nbsp; | &nbsp;
          <a href="https://www.forms-surfaces.com/privacy-policy">Privacy Policy</a>
          &nbsp; | &nbsp;
          <a href="https://www.forms-surfaces.com/sites/default/themes/fs_revised/docs/modern-slavery-human-trafficking-statement.pdf" target="_blank">Modern Slavery Statement</a>
          &nbsp; | &nbsp;©&nbsp;
          {new Date().getFullYear()}&nbsp;Forms+Surfaces &nbsp;
        </div>
      </div>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
  background-color: #fff;
  font-weight: 100;
  font-smooth: always;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  .social-icons{
    padding: 20px 30px;
    text-align: center;
    border-top: solid 1px #e5e5e5;
    border-bottom: solid 1px #e5e5e5;
  }
  .footer-links{
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 950px;
    color: #999;
    font-size: .8rem;
    position: relative;
    .logo {
      position: absolute;
      top: 1rem;
      right: 0px;
    }
    p{
      font-size: .8rem;
      padding-top: 0;
      margin-top: 0;
    }
    h2{
      font-size: .8rem;
      font-weight: bold;
      letter-spacing: normal;
      text-transform: none;
      padding: 5px 0;
      margin: 0;
      font-family: 'Helvetica Neue Medium';
    }
    a{
      text-decoration: none;
    }
    a:hover{
      text-decoration: underline;
    }
    ul li{
      line-height: 1.1rem;
    }
    >div {
      width: 50%;
      padding-bottom: 1rem;
      margin-top: 1rem;
      padding-top: 0;
      margin-bottom: 1rem;
      padding-right: 10px;
      padding-left: 10px;
    }
    >div:nth-child(even){
      border-right: solid 1px #e5e5e5;
    }
    >div:first-child{
      padding-left: 0px;
    }
    >div:last-child{
      padding-right: 0px;
      border-right: none;
    }
    ul{
      list-style: none;
      margin: 0px;
      padding: 0px;
    }
    input {
      font-size: 15px;
      display: block;
      padding: 0 0.4em;
      margin: 0 4% 10px 10px;
      min-height: 32px;
      width: 58%;
      min-width: 130px;
      -webkit-border-radius: 3px;
      -moz-border-radius: 3px;
      border-radius: 3px;
      border: 1px solid #999;
      -webkit-appearance: none;
      outline: none;
      color: #999;
    }
    input[type="submit"]{
      background: #999;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .footer-lower{
    text-align: right;
    max-width: 950px;
    margin: 0 auto;
    width: 100%;
    a{
      font-size: .75rem;
      text-transform: uppercase;
      text-decoration: none;
    }
    .footer-inner{
      border-top: solid 1px #e5e5e5;
      padding-top: 1rem;
      text-align: right;
      color: #999;
      height: 82px;
      text-transform: uppercase;
    }
    font-size: .8rem;
  }
  .credit {
    font-size: 0.85rem;
    margin-bottom: 0.5rem;

    a {
      padding: 0;
      font-size: 0.85rem;
      text-decoration: none;
    }
  }
  /* #mc_embed_signup{
    background:#fff;
    clear:left;
    font:14px Helvetica,Arial,sans-serif;
  } */
  .social-icons{
    a{
      font-size: 1.75rem;
      padding: 0 0.5rem;
      color: #999;
    }
  }
  @media only screen and (min-width: 600px) {
    .footer-links{
      >div {
        width: 50%;
      }
    }
  }
  @media only screen and (min-width: 800px) {
    .footer-links{
      >div {
        width: 20%;
      }
      >div:nth-child(odd){
        border-right: solid 1px #e5e5e5;
      }
    }
  }

  a {
    color: #999;
    svg {
      vertical-align: middle;
    }
  }
`

export default Footer
